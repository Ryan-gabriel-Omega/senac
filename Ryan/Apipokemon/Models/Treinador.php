<?php

namespace Apipokemon\Models;

class Treinador
{
    public $idTreinador;
    public $nome;
    public $idade;
    public $altura;
    public $peso;
    public $nivel;

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
        $query = "SELECT * FROM " . $this->tabela . " 
                  WHERE idTreinador = ? 
                  LIMIT 1";

        $stmt = $this->db->prepare($query);
        $stmt->bindParam(1, $this->idTreinador);
        $stmt->execute();

        $row = $stmt->fetch(\PDO::FETCH_ASSOC);

        if ($row) {
            $this->idTreinador = $row['idTreinador'];
            $this->nome = $row['nome'];
            $this->idade = $row['idade'];
            $this->altura = $row['altura'];
            $this->peso = $row['peso'];
            $this->nivel = $row['nivel'];
        }
    }

    public function add()
    {
        $query = "INSERT INTO " . $this->tabela . " 
                  (nome, idade, altura, peso, nivel)
                  VALUES
                  (:nome, :idade, :altura, :peso, :nivel)";

        $stmt = $this->db->prepare($query);

        $stmt->bindParam(':nome', $this->nome);
        $stmt->bindParam(':idade', $this->idade);
        $stmt->bindParam(':altura', $this->altura);
        $stmt->bindParam(':peso', $this->peso);
        $stmt->bindParam(':nivel', $this->nivel);

        return $stmt->execute();
    }
      public function update()
{
    $query = 'UPDATE ' . $this->tabela . '
              SET nome = :nome,
                  idade = :idade,
                  altura = :altura,
                  peso = :peso,
                  nivel = :nivel
              WHERE idTreinador = :idTreinador';

    $stmt = $this->db->prepare($query);

    $stmt->bindParam(':nome', $this->nome);
    $stmt->bindParam(':idade', $this->idade);
    $stmt->bindParam(':altura', $this->altura);
    $stmt->bindParam(':peso', $this->peso);
    $stmt->bindParam(':nivel', $this->nivel);
    $stmt->bindParam(':idTreinador', $this->idTreinador);

    if ($stmt->execute()) {
        return true;
    }

    return false;
}
}