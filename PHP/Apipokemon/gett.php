<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
include_once 'Config/Database.php';
include_once 'Models/Treinador.php';
 
use Apipokemon\Config\Database;
use Apipokemon\Models\Treinador;
 
$database = new Database();
$db = $database->getConnection();

$treinador = new Treinador($db);

$treinador->id = isset($_GET['id']) ? $_GET['id'] : null;

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if ($treinador->id) {

        $treinador->get();

        $treinador_arr = array(
            "id" => $treinador->id,
            "nome" => $treinador->nome,
            "idade" => $treinador->idade
        );

        echo json_encode($treinador_arr, JSON_PRETTY_PRINT);

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