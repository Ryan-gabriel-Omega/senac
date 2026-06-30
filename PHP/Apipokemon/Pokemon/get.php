<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../Config/Database.php';
include_once '../Models/Pokemon.php';

use Apipokemon\Config\Database;
use Apipokemon\Models\Pokemon;

$database = new Database();
$db = $database->getConnection();

$pokemon = new Pokemon($db);

$pokemon->idPokemon = isset($_GET['id']) ? $_GET['id'] : null;

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    if ($pokemon->idPokemon) {

        $pokemon->get();

        if ($pokemon->nome) {

            $pokemon_arr = array(
                "idPokemon" => $pokemon->idPokemon,
                "nome" => $pokemon->nome,
                "tipo" => $pokemon->tipo,
                "nivel" => $pokemon->nivel,
                "altura" => $pokemon->altura,
                "peso" => $pokemon->peso,
                "vida" => $pokemon->vida,
                "genero" => $pokemon->genero,
                "forca" => $pokemon->forca,
                "velocidade" => $pokemon->velocidade,
                "defesa" => $pokemon->defesa,
                "ataque" => $pokemon->ataque,
               "treinador_nome" => $pokemon->treinador_nome
            );

            http_response_code(200);
            echo json_encode($pokemon_arr, JSON_PRETTY_PRINT);

        } else {

            http_response_code(404);
            echo json_encode(
                array("Mensagem" => "Pokémon não encontrado.")
            );
        }

    } else {

        http_response_code(400);
        echo json_encode(
            array("Mensagem" => "ID não informado.")
        );
    }

} else {

    http_response_code(405);
    echo json_encode(
        array("Mensagem" => "Método não permitido.")
    );
}