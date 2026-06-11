<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once 'Config/Database.php';
include_once 'Models/Pokemon.php';

use Apipokemon\Config\Database;
use Apipokemon\Models\Pokemon;

$database = new Database();
$db = $database->getConnection();

$pokemon = new Pokemon($db);

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {

    try {

        $data = json_decode(file_get_contents("php://input"));

        if (
            !empty($data->idPokemon) &&
            !empty($data->nome) &&
            !empty($data->tipo) &&
            isset($data->nivel) &&
            isset($data->altura) &&
            isset($data->peso) &&
            isset($data->vida) &&
            !empty($data->genero) &&
            isset($data->forca) &&
            isset($data->velocidade) &&
            isset($data->defesa) &&
            isset($data->ataque) &&
            isset($data->idTreinador)
        ) {

            $pokemon->idPokemon = $data->idPokemon;
            $pokemon->nome = $data->nome;
            $pokemon->tipo = $data->tipo;
            $pokemon->nivel = $data->nivel;
            $pokemon->altura = $data->altura;
            $pokemon->peso = $data->peso;
            $pokemon->vida = $data->vida;
            $pokemon->genero = $data->genero;
            $pokemon->forca = $data->forca;
            $pokemon->velocidade = $data->velocidade;
            $pokemon->defesa = $data->defesa;
            $pokemon->ataque = $data->ataque;
            $pokemon->idTreinador = $data->idTreinador;

            if ($pokemon->update()) {

                http_response_code(200);

                echo json_encode(
                    array('Mensagem' => 'Pokemon atualizado com sucesso')
                );

            } else {

                http_response_code(500);

                echo json_encode(
                    array('Mensagem' => 'Não foi possível atualizar o Pokemon')
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