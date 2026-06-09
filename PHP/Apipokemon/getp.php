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

$pokemon->id = isset($_GET['id']) ? $_GET['id'] : null;

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if ($pokemon->id) {

        $pokemon->get();

        $pokemon_arr = array(
            "id" => $pokemon->id,
            "nome" => $pokemon->nome,
            "tipo" => $pokemon->tipo,
            "nivel" => $pokemon->nivel
        );

        echo json_encode($pokemon_arr, JSON_PRETTY_PRINT);

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
?>