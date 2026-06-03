<?php
// localhost/apipizzati03/api/pizza/get.php?id=3
 
// Headers obrigatórios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// Incluir arquivos de banco de dados e modelo
include_once 'Config/Database.php';
include_once 'Models/pizza.php';
 
use Apipizzaria\Config\Database;
use Apipizzaria\Models\Pizza;
 
// Instanciar o objeto Database e obter a conexão
$database = new Apipizzaria\Config\Database();
$db = $database->getConnection();
 
// Instanciar o objeto Pizza
$pizza = new Apipizzaria\Models\Pizza($db);
 
$pizza->id = isset($_GET['id']) ? $_GET['id'] : null;

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if ($pizza->id) {
        // Busca a pizza
        $pizza->get();
 
        // Cria o array de resposta
        $pizza_arr = array(
            "id" => $pizza->id,
            "nome" => $pizza->nome,
            "ingredientes" => $pizza->ingredientes,
            "valor" => $pizza->valor
        );
 
        // Converte para JSON e envia a resposta
        // `JSON_PRETTY_PRINT` é opcional, mas deixa o JSON mais legível
        echo json_encode($pizza_arr, JSON_PRETTY_PRINT);
    } else {
    }
} else {
    http_response_code(405);
    echo json_encode(
    array("Mensagem" => "Método não permitido.")
    );
}
?>