<?php
namespace Apipizzaria\Models;

class bebidas{



public $id;

public $nome;

public $ml;

public $valor;

private $db;

private $tabela="bebidas";

public function __construct($db)
{
    $this->db = $db;
}

}
?>