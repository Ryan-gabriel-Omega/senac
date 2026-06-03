<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once 'Config/database.php';
include_once 'Models/bebidas.php';

use Apipizzaria\Config\database;
use Apipizzaria\Models\bebidas;

$database = new database();
$db = $database->getConnection();

$bebidas = new bebidas($db);

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $stmt = $bebidas->getNaoAlcoholicas();
    $num = $stmt->rowCount();

    if ($num > 0) {

        $bebidas_arr = array();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $bebidas_arr[] = array(
                "id" => $row['idbebidas'],
                "nome" => $row['nome'],
                "ml" => $row['ml'],
                "valor" => $row['valor']
            );
        }

        echo json_encode($bebidas_arr, JSON_PRETTY_PRINT);

    } else {
        http_response_code(404);
        echo json_encode(["mensagem" => "Nenhuma bebida não alcoólica encontrada"]);
    }

} else {
    http_response_code(405);
    echo json_encode(["mensagem" => "Método não suportado"]);
}
?>