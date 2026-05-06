<?php

if (isset($_GET["nome"])) {

$nome = $_GET["nome"];

  echo  "Olá, $nome";
}else {
  echo "Olá, visitante";
}
?>