<?php

namespace Apipizzaria\Models;

class pizza{

public $id;

public $nome;

public $ingredientes;

public $valor;

private $db;

private $tabela="pizzas";

public function __construct($db)
{
    $this->db = $db;
}
public function getall(){
    $query="SELECT * FROM " . $this->tabela;

    $stmt = $this->db->prepare($query);

    $stmt->execute();

    return $stmt;
}

}


?>