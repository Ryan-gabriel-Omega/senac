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

try {

    $stmt = $pokemon->getAll();
    $num = $stmt->rowCount();

    if ($num > 0) {

        $pokemon_arr = [];

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

            $pokemon_arr[] = [
                "idPokemon" => $row['idPokemon'],
                "nome" => $row['nome'],
                "tipo" => $row['tipo'],
                "nivel" => $row['nivel'],
                "altura" => $row['altura'],
                "peso" => $row['peso'],
                "vida" => $row['vida'],
                "genero" => $row['genero'],
                "forca" => $row['forca'],
                "velocidade" => $row['velocidade'],
                "defesa" => $row['defesa'],
                "ataque" => $row['ataque'],
                "idTreinador" => $row['idTreinador']
            ];
        }

        http_response_code(200);
        echo json_encode($pokemon_arr, JSON_PRETTY_PRINT);

    } else {

        http_response_code(404);
        echo json_encode(["Mensagem" => "Nenhum Pokémon encontrado."]);
    }

} catch (Exception $e) {

    http_response_code(500);

    echo json_encode(
        array('Mensagem' => 'Erro interno do servidor.')
    );
}