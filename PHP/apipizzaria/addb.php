<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
 
include_once 'Config/Database.php';
include_once 'Models/bebidas.php';
 
use Apipizzaria\Config\Database;
use Apipizzaria\Models\bebidas;
 

$database = new Database();
$db = $database->getConnection();

$bebidas = new Bebidas($db);
 
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    try {

        $data = json_decode(file_get_contents("php://input"));
 
        if (
            !empty($data->nome) &&
            !empty($data->ml) &&
            !empty($data->valor)
        ) {
  
            $bebidas->nome = $data->nome;
            $bebidas->ml = $data->ml;
            $bebidas->valor = $data->valor;

            if ($bebidas->add()) {
                http_response_code(201);
   
                echo json_encode(
                    array('Mensagem' => 'bebida Criada com Sucesso')
                );
            } else {
                http_response_code(400);

                echo json_encode(
                    array('Erro' => 'Nao foi possivel criar a bebida')
                );
            }
        } else {
            http_response_code(400);

            echo json_encode(
                array('Erro' => 'Dados Incompletos. Nao foi possivel criar a bebida.')
            );
        }
    } catch (Exception $e) {
        echo json_encode(array("Erro" => $e->getMessage()));
    }
} else {
    http_response_code(400);
    echo json_encode(array("Erro" => "Método não suportado!"));
}