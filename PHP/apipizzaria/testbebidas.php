<?php

require_once __DIR__. "/Config/Database.php";
require_once __DIR__. "/Models/bebidas.php";

use Apipizzaria\Config\Database;
use Apipizzaria\Models\bebidas;

$bancodados= new database();
$conexao= $bancodados->getConnection();

echo "<h1>Testando Conexão e Modelo</h1>";
 
if (!$conexao) {
    echo "<p style='color: red;'>Falha na conexão.</p>";
    die(); // Encerra o script se não houver conexão
}
 
echo "<p style='color: green;'>Conexão bem-sucedida!</p>";
 
echo "<h2>Criando um objeto bebidas...</h2>";
 
// Criamos uma instância da classe Pizza, passando a conexão com o banco
$bebidas = new bebidas($conexao);
 
// Atribuímos valores às suas propriedades públicas
$bebidas->nome = 'coca-cola';
$bebidas->ml= '2000';
$bebidas->valor = 10.00;
 
// Vamos inspecionar o objeto!
echo "<pre>"; // A tag <pre> ajuda a formatar a saída do print_r
print_r($bebidas);
echo "</pre>";
 

?>