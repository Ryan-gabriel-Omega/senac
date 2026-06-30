<?php

header("Content-Type: application/json; charset=UTF-8");

include_once '../Config/Database.php';
include_once '../Models/Pokemon.php';

use Apipokemon\Config\Database;
use Apipokemon\Models\Pokemon;

$database = new Database();
$db = $database->getConnection();

$pokemon = new Pokemon($db);


if (!isset($_GET['idTreinador'])) {

    echo json_encode([
        "message" => "Informe o id do treinador."
    ]);

    exit;
}

$pokemon->idTreinador = $_GET['idTreinador'];

$stmt = $pokemon->getPorTreinador();


if ($stmt->rowCount() == 0) {

    echo json_encode([
        "message" => "Este treinador não esta treinado nenhum pokemon por ora"
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


echo json_encode($pokemons);