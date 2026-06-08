<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once 'Config/Database.php';
include_once 'Models/Pokemon.php';

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
                "id" => $row['idPokemon'],
                "nome" => $row['nome'],
                "tipo" => $row['tipo'],
                "nivel" => $row['nivel']
            ];
        }

        http_response_code(200);
        echo json_encode($pokemon_arr);

    } else {

        http_response_code(404);
        echo json_encode(["mensagem" => "Nenhum Pokémon encontrado"]);
    }

} catch (Throwable $e) {

    http_response_code(500);
    echo json_encode(["erro" => $e->getMessage()]);
}