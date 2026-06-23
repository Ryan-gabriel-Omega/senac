<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');

include_once '..\Config/Database.php';
include_once '..\Models/Pokemon.php';

use Apipokemon\Config\Database;
use Apipokemon\Models\Pokemon;

$database = new Database();
$db = $database->getConnection();

$pokemon = new Pokemon($db);

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {

    try {

        $data = json_decode(file_get_contents("php://input"));

        if (!empty($data->idPokemon)) {

            $pokemon->idPokemon = $data->idPokemon;

            if (!$pokemon->existe($pokemon->idPokemon)) {

                http_response_code(404);

                echo json_encode([
                    'Mensagem' => 'Pokémon não encontrado.'
                ]);

                exit;
            }

            if ($pokemon->delete()) {

                http_response_code(200);

                echo json_encode(
                    array(
                        'Mensagem' => 'Pokémon deletado com sucesso.'
                    )
                );
            } else {

                http_response_code(500);

                echo json_encode(
                    array(
                        'Mensagem' => 'Erro ao deletar o Pokémon.'
                    )
                );
            }
        } else {

            http_response_code(400);

            echo json_encode(
                array(
                    'Mensagem' => 'ID do Pokémon inválido.'
                )
            );
        }
    } catch (Exception $e) {

        http_response_code(500);

        echo json_encode(
            array(
                'Erro' => 'Erro interno no servidor.'
            )
        );
    }
} else {

    http_response_code(405);

    echo json_encode(
        array(
            'Erro' => 'Método não suportado!'
        )
    );
}
