<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once 'Config/Database.php';
include_once 'Models/bebidas.php';

use Apipizzaria\Config\Database;
use Apipizzaria\Models\Bebidas;

$database = new Database();
$db = $database->getConnection();


$bebidas = new bebidas($db);

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    try {

        $data = json_decode(file_get_contents("php://input"));

        if (
            !empty($data->id) &&
            !empty($data->nome) &&
            !empty($data->ml) &&
            !empty($data->valor)
        ) {
   
            $bebidas->id = $data->id;

            $bebidas->nome = $data->nome;
            $bebidas->ml = $data->ml;
            $bebidas->valor = $data->valor;

            if ($bebidas->update()) {
                http_response_code(200);
    
                echo json_encode(
                    array('Mensagem' => 'bebida Atualizada com Sucesso')
                );
            } else {
                http_response_code(500);
 
                echo json_encode(
                    array('Mensagem' => 'Nao foi possivel atualizar a bebida')
                );
            }
        } else {

            http_response_code(400);
            echo json_encode(
                array('Mensagem' => 'Dados Incompletos. Nao foi possivel atualizar a bebida.')
            );
        }
    } catch (Exception $e) {
        echo json_encode(array("erro" => $e->getMessage()));
    }
} else {
    http_response_code(400);
    echo json_encode(array("erro" => "Método não suportado!"));
}
