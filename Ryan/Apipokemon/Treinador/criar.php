<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');

include_once '..\Config/Database.php';
include_once '..\Models/Treinador.php';

use Apipokemon\Config\Database;
use Apipokemon\Models\Treinador;

$database = new Database();
$db = $database->getConnection();

$treinador = new Treinador($db);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    try {

        $data = json_decode(file_get_contents("php://input"));

        if (
            !empty($data->nome) &&
            !empty($data->idade) &&
            !empty($data->altura) &&
            !empty($data->peso) &&
            !empty($data->nivel)
        ) {

            $treinador->nome = $data->nome;
            $treinador->idade = $data->idade;
            $treinador->altura = $data->altura;
            $treinador->peso = $data->peso;
            $treinador->nivel = $data->nivel;

            if ($treinador->add()) {

                http_response_code(201);
                echo json_encode([
                    "Mensagem" => "Treinador criado com sucesso"
                ]);

            } else {

                http_response_code(400);
                echo json_encode([
                    "Erro" => "Não foi possível criar o treinador"
                ]);
            }

        } else {

            http_response_code(400);
            echo json_encode([
                "Erro" => "Dados incompletos"
            ]);
        }

    } catch (Exception $e) {

        http_response_code(500);
        echo json_encode([
            "Erro" => 'Erro interno no servidor.'
        ]);
    }

} else {

    http_response_code(405);
    echo json_encode([
        "Erro" => "MMétodo não permitido."
    ]);
}