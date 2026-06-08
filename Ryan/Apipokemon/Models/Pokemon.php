<?php

namespace Apipokemon\Models;

class Pokemon
{
    public $id;
    public $nome;
    public $tipo;
    public $nivel;

    private $db;
    private $tabela = "pokemons";

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
        $query = "SELECT * FROM " . $this->tabela . " WHERE idPokemon = ? LIMIT 1";

        $stmt = $this->db->prepare($query);
        $stmt->bindParam(1, $this->id);
        $stmt->execute();

        $row = $stmt->fetch(\PDO::FETCH_ASSOC);

        if ($row) {
            $this->id = $row['idPokemon'];
            $this->nome = $row['nome'];
            $this->tipo = $row['tipo'];
            $this->nivel = $row['nivel'];
        }
    }

    public function add()
    {
        $query = "INSERT INTO " . $this->tabela . " (nome, tipo, nivel)
                  VALUES (:nome, :tipo, :nivel)";

        $stmt = $this->db->prepare($query);

        $stmt->bindParam(':nome', $this->nome);
        $stmt->bindParam(':tipo', $this->tipo);
        $stmt->bindParam(':nivel', $this->nivel);

        return $stmt->execute();
    }
}
   
?>