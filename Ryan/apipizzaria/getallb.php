<?php
// Headers obrigatórios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// Incluir arquivos de banco de dados e modelo
include_once 'Config/Database.php';
include_once 'Models/bebidas.php';

// Instanciar o objeto Database e obter a conexão
$database = new Apipizzaria\Config\Database();
$db = $database->getConnection();
 
// Instanciar o objeto Pizza
$bebidas = new Apipizzaria\Models\bebidas($db);

try {
    //colocar para demonstrar erro com coluna errada mas lá no método read em pizza
    // Chamar o método getall() para buscar as pizzas
    $stmt = $bebidas->getall();
    $num = $stmt->rowCount();
 
    // Verificar se mais de 0 registros foram encontrados
    if ($num > 0) {
        // Array de pizzas
        $bebidas_arr = array();
 
        // Percorrer o resultado da consulta
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            // A função extract transforma $row['nome'] em apenas $nome
            extract($row);
 
            $bebidas_item = array(
                "id" => $idbebidas,
                "nome" => $nome,
                "ml" => $ml,
                "valor" => $valor
            );
 
            array_push($bebidas_arr, $bebidas_item);
        }
 
        // Definir o código de resposta como 200 OK
        http_response_code(200);
 
        // Mostrar os dados das pizzas em formato JSON
        echo json_encode($bebidas_arr);
    } else {
        // Se nenhuma pizza for encontrada, definir o código de resposta como 404 Not Found
        http_response_code(404);
 
        // Informar ao usuário que nenhuma pizza foi encontrada
        echo json_encode(
            array("Mensagem" => "Nenhuma bebidas encontrada.")
        );
    }
} catch (PDOException $e) {
    echo json_encode(array("Erro de banco de dados" => $e->getMessage()));
} catch (Throwable $e) {
    echo json_encode(array("Erro" => $e->getMessage()));
}

?>