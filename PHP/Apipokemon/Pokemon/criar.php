<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');

include_once '../Config/Database.php';
include_once '../Models/Pokemon.php';

use Apipokemon\Config\Database;
use Apipokemon\Models\Pokemon;

$database = new Database();
$db = $database->getConnection();

$pokemon = new Pokemon($db);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    try {

        $data = json_decode(file_get_contents("php://input"));

        if (
            !empty($data->nome) &&
            !empty($data->tipo) &&
            !empty($data->nivel) &&
            !empty($data->altura) &&
            !empty($data->peso) &&
            !empty($data->vida) &&
            !empty($data->genero) &&
            !empty($data->forca) &&
            !empty($data->velocidade) &&
            !empty($data->defesa) &&
            !empty($data->ataque) &&
            !empty($data->idTreinador)
        ) {

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

            if ($pokemon->add()) {

                http_response_code(201);
                echo json_encode([
                    "Mensagem" => "Pokémon criado com sucesso"
                ]);

            } else {

                http_response_code(400);
                echo json_encode([
                    "Erro" => "Não foi possível criar o Pokémon"
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
            "Erro" => $e->getMessage()
        ]);
    }

} else {

    http_response_code(405);
    echo json_encode([
        "Erro" => "Método não suportado"
    ]);
}