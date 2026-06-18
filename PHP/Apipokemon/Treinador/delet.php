<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');

include_once '..\Config/Database.php';
include_once '..\Models/Pokemon.php';

use Apipokemon\Config\Database;
use Apipokemon\Models\Treinador;

$database = new Database();
$db = $database->getConnection();

$treinador = new Treinador($db);

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {

    try {

        $data = json_decode(file_get_contents("php://input"));

        if (!empty($data->idTreinador)) {

            $treinador->idTreinador = $data->idTreinador;

            if ($treinador->delete()) {

                http_response_code(200);

                echo json_encode([
                    'Mensagem' => 'Treinador deletado com sucesso.'
                ]);

            } else {

                http_response_code(404);

                echo json_encode([
                    'Mensagem' => 'Não foi possível deletar o treinador.'
                ]);
            }

        } else {

            http_response_code(400);

            echo json_encode([
                'Mensagem' => 'ID do treinador inválido.'
            ]);
        }

    } catch (Exception $e) {

        http_response_code(500);

        echo json_encode([
            'Erro' => $e->getMessage()
        ]);
    }

} else {

    http_response_code(405);

    echo json_encode([
        'Erro' => 'Método não suportado!'
    ]);
}