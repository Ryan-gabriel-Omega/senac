<?php

header("Content-Type: application/json; charset=UTF-8");

include_once '..\Config/Database.php';
include_once '..\Models/Pokemon.php';
include_once '..\Models/Treinador.php';

use Apipokemon\Config\Database;
use Apipokemon\Models\Pokemon;
use Apipokemon\Models\Treinador;


$database = new Database();
$db = $database->getConnection();

$pokemon = new Pokemon($db);
$treinador = new Treinador($db);


// ADICIONADO: permite somente GET
if ($_SERVER['REQUEST_METHOD'] == 'GET') {


    if (!isset($_GET['idTreinador'])) {

        http_response_code(400);

        echo json_encode([
            "message" => "Informe o id do treinador."
        ]);

        exit;
    }


    if (!$treinador->existe($_GET['idTreinador'])) {

        http_response_code(404);

        echo json_encode([
            "message" => "Treinador não encontrado."
        ]);

        exit;
    }


    $pokemon->idTreinador = $_GET['idTreinador'];

    $stmt = $pokemon->getPorTreinador();


    if ($stmt->rowCount() == 0) {

        http_response_code(404);

        echo json_encode([
            "message" => "Este treinador não está treinando nenhum Pokémon por ora."
        ]);

        exit;
    }


    $pokemons = [];

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

        $pokemons[] = [
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

    echo json_encode($pokemons);

} else {

    http_response_code(405);

    echo json_encode([
        "message" => "Método não permitido. Use GET."
    ]);
}