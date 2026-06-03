<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 

include_once 'Config/Database.php';
include_once 'Models/bebidas.php';
 
use Apipizzaria\Config\Database;
use Apipizzaria\Models\bebidas;
 
$database = new Apipizzaria\Config\Database();
$db = $database->getConnection();

$bebidas = new Apipizzaria\Models\bebidas($db);
 
$bebidas->id = isset($_GET['id']) ? $_GET['id'] : null;

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if ($bebidas->id) {

        $bebidas->get();
 
        $bebidas_arr = array(
            "id" => $bebidas->id,
            "nome" => $bebidas->nome,
            "ml" => $bebidas->ml,
            "valor" => $bebidas->valor
        );
 

        echo json_encode($bebidas_arr, JSON_PRETTY_PRINT);
    } else {
    }
} else {
    http_response_code(405);
    echo json_encode(
    array("Mensagem" => "Método não permitido.")
    );
}
?>