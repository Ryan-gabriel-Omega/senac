<?php

// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '..\Config/Database.php';
include_once '..\Models/Treinador.php';

use Apipokemon\Config\Database;
use Apipokemon\Models\Treinador;

$database = new Database();
$db = $database->getConnection();

$treinador = new Treinador($db);

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {

    try {

        $data = json_decode(file_get_contents("php://input"));

        if (
            !empty($data->idTreinador) &&
            !empty($data->nome) &&
            isset($data->idade) &&
            isset($data->altura) &&
            isset($data->peso) &&
            isset($data->nivel)
        ) {

            $treinador->idTreinador = $data->idTreinador;
            $treinador->nome = $data->nome;
            $treinador->idade = $data->idade;
            $treinador->altura = $data->altura;
            $treinador->peso = $data->peso;
            $treinador->nivel = $data->nivel;

            if ($treinador->update()) {

                http_response_code(200);

                echo json_encode(
                    array('Mensagem' => 'Treinador atualizado com sucesso')
                );

            } else {

                http_response_code(500);

                echo json_encode(
                    array('Mensagem' => 'Não foi possível atualizar o treinador')
                );
            }

        } else {

            http_response_code(400);

            echo json_encode(
                array('Mensagem' => 'Dados incompletos')
            );
        }

    } catch (Exception $e) {

        echo json_encode(
            array('erro' => $e->getMessage())
        );
    }

} else {

    http_response_code(400);

    echo json_encode(
        array('erro' => 'Método não suportado!')
    );
}