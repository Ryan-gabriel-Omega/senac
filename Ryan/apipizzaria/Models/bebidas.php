<?php

namespace Apipizzaria\Models;

class bebidas
{

    public $id;

    public $nome;

    public $ml;

    public $valor;

    private $db;

    private $tabela = "bebidas";

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
        $query = "SELECT * FROM " . $this->tabela . " WHERE idbebidas = ? LIMIT 1";

        $stmt = $this->db->prepare($query);
        $stmt->bindParam(1, $this->id);
        $stmt->execute();

        $row = $stmt->fetch(\PDO::FETCH_ASSOC);

        if ($row) {
            $this->id = $row['idbebidas'];
            $this->nome = $row['nome'];
            $this->ml = $row['ml'];
            $this->valor = $row['valor'];
        }
    }

    public function getAlcoholicas()
    {
        $query = "SELECT * FROM bebidas WHERE alcoolica = 1";

        $stmt = $this->db->prepare($query);
        $stmt->execute();

        return $stmt;
    }
    public function getNaoAlcoholicas()
    {
        $query = "SELECT * FROM bebidas WHERE alcoolica = 0";

        $stmt = $this->db->prepare($query);
        $stmt->execute();

        return $stmt;
    }
    public function add()
    { 
        $query = 'INSERT INTO ' . $this->tabela . ' (nome, ml, valor) '.
        ' VALUES (:nome, :ml, :valor)';
 
        $stmt = $this->db->prepare($query);
 
        $stmt->bindParam(':nome', $this->nome);
        $stmt->bindParam(':ml', $this->ml);
        $stmt->bindParam(':valor', $this->valor);
 
        if ($stmt->execute()) {
            return true;
        }        
        return false;
    }
}
