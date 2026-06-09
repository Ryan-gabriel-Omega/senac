<?php

namespace Apipokemon\Models;

class Treinador
{
    public $id;
    public $nome;
    public $idade;

    private $db;
    private $tabela = "treinadores";

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function getAll()
    {
        $query = "SELECT * FROM " . $this->tabela;
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function get()
    {
        $query = "SELECT * FROM " . $this->tabela . " WHERE idTreinador = ? LIMIT 1";

        $stmt = $this->db->prepare($query);
        $stmt->bindParam(1, $this->id);
        $stmt->execute();

        $row = $stmt->fetch(\PDO::FETCH_ASSOC);

        if ($row) {
            $this->id = $row['idTreinador'];
            $this->nome = $row['nome'];
            $this->idade = $row['idade'];
        }
    }

    public function add()
    {
        $query = "INSERT INTO " . $this->tabela . " (nome, idade)
                  VALUES (:nome, :idade)";

        $stmt = $this->db->prepare($query);

        $stmt->bindParam(':nome', $this->nome);
        $stmt->bindParam(':idade', $this->idade);

        return $stmt->execute();
    }
}
   
?>