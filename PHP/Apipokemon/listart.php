<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once 'Config/Database.php';
include_once 'Models/Treinador.php';

use Apipokemon\Config\Database;
use Apipokemon\Models\Treinador;

$database = new Database();
$db = $database->getConnection();

$treinador = new Treinador($db);

try {

    $stmt = $treinador->getAll();
    $num = $stmt->rowCount();

    if ($num > 0) {

        $treinador_arr = [];

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

            $treinador_arr[] = [
                "id" => $row['idTreinador'],
                "nome" => $row['nome'],
                "idade" => $row['idade']
            ];
        }

        http_response_code(200);
        echo json_encode($treinador_arr);

    } else {

        http_response_code(404);
        echo json_encode(["mensagem" => "Nenhum treinador encontrado"]);
    }

} catch (Throwable $e) {

    http_response_code(500);
    echo json_encode(["erro" => $e->getMessage()]);
}
?>