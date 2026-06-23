<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '..\Config/Database.php';
include_once '..\Models/Treinador.php';

use Apipokemon\Config\Database;
use Apipokemon\Models\Treinador;

$database = new Database();
$db = $database->getConnection();

$treinador = new Treinador($db);

$treinador->idTreinador = isset($_GET['id']) ? $_GET['id'] : null;

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    if ($treinador->idTreinador) {

        $treinador->get();

        if ($treinador->nome) {

            $treinador_arr = array(
                "idTreinador" => $treinador->idTreinador,
                "nome" => $treinador->nome,
                "idade" => $treinador->idade,
                "altura" => $treinador->altura,
                "peso" => $treinador->peso,
                "nivel" => $treinador->nivel
            );

            http_response_code(200);
            echo json_encode($treinador_arr, JSON_PRETTY_PRINT);

        } else {

            http_response_code(404);
            echo json_encode([
                "Mensagem" => "Treinador não encontrado."
            ]);
        }

    } else {

        http_response_code(400);
        echo json_encode([
            "Mensagem" => "ID não informado."
        ]);
    }

} else {

    http_response_code(405);
    echo json_encode([
        "Mensagem" => "Método não permitido."
    ]);
}