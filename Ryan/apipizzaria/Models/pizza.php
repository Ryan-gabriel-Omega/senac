<?php

namespace Apipizzaria\Models;

class pizza
{

    public $id;

    public $nome;

    public $ingredientes;

    public $valor;

    private $db;

    private $tabela = "pizzas";

    public function __construct($db)
    {
        $this->db = $db;
    }
    public function getall()
    {
        $query = "SELECT * FROM " . $this->tabela;

        $stmt = $this->db->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    public function get()
    {
        $query = "SELECT * FROM " . $this->tabela . " WHERE idPizza = ? LIMIT 1";

        $stmt = $this->db->prepare($query);
        $stmt->bindParam(1, $this->id);
        $stmt->execute();

        $row = $stmt->fetch(\PDO::FETCH_ASSOC);

        if ($row) {
            $this->id = $row['idPizza'];
            $this->nome = $row['nome'];
            $this->ingredientes = $row['ingredientes'];
            $this->valor = $row['valor'];
        }
    }
}

?>