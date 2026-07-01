<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');

include_once '../Config/Database.php';
include_once '../Models/Treinador.php';

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
                    'Mensagem' => 'Treinador excluído com sucesso.'
                ]);

            } else {

                http_response_code(404);

                echo json_encode([
                    'Mensagem' => 'Treinador não encontrado ou não pôde ser excluído.'
                ]);
            }

        } else {

            http_response_code(400);

            echo json_encode([
                'Mensagem' => 'ID do treinador não informado ou inválido.'
            ]);
        }

 } catch (Exception $e) {

    http_response_code(500);

    echo json_encode(
        array('Mensagem' => 'Erro interno do servidor.')
    );
}
} else {

    http_response_code(405);

    echo json_encode([
        'Mensagem' => 'Método não suportado!'
    ]);
}