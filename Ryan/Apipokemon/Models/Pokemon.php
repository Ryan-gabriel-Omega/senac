<?php

namespace Apipokemon\Models;

class Pokemon
{
    public $idPokemon;
    public $nome;
    public $tipo;
    public $nivel;
    public $altura;
    public $peso;
    public $vida;
    public $genero;
    public $forca;
    public $velocidade;
    public $defesa;
    public $ataque;
    public $idTreinador;
    public $treinador_nome;

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
        $query = "SELECT p.*, t.nome AS treinador_nome
          FROM pokemons p
          JOIN treinadores t ON p.idTreinador = t.idTreinador
          WHERE p.idPokemon = ?
          LIMIT 1";

        $stmt = $this->db->prepare($query);
        $stmt->bindParam(1, $this->idPokemon);
        $stmt->execute();

        $row = $stmt->fetch(\PDO::FETCH_ASSOC);

        if ($row) {
            $this->idPokemon = $row['idPokemon'];
            $this->nome = $row['nome'];
            $this->tipo = $row['tipo'];
            $this->nivel = $row['nivel'];
            $this->altura = $row['altura'];
            $this->peso = $row['peso'];
            $this->vida = $row['vida'];
            $this->genero = $row['genero'];
            $this->forca = $row['forca'];
            $this->velocidade = $row['velocidade'];
            $this->defesa = $row['defesa'];
            $this->ataque = $row['ataque'];
            $this->idTreinador = $row['idTreinador'];
            $this->treinador_nome = $row['treinador_nome'];
        }
    }

    public function add()
    {
        $query = "INSERT INTO " . $this->tabela . "
                (nome, tipo, nivel, altura, peso, vida, genero, forca, velocidade, defesa, ataque, idTreinador)
                VALUES
                (:nome, :tipo, :nivel, :altura, :peso, :vida, :genero, :forca, :velocidade, :defesa, :ataque, :idTreinador)";

        $stmt = $this->db->prepare($query);

        $stmt->bindParam(':nome', $this->nome);
        $stmt->bindParam(':tipo', $this->tipo);
        $stmt->bindParam(':nivel', $this->nivel);
        $stmt->bindParam(':altura', $this->altura);
        $stmt->bindParam(':peso', $this->peso);
        $stmt->bindParam(':vida', $this->vida);
        $stmt->bindParam(':genero', $this->genero);
        $stmt->bindParam(':forca', $this->forca);
        $stmt->bindParam(':velocidade', $this->velocidade);
        $stmt->bindParam(':defesa', $this->defesa);
        $stmt->bindParam(':ataque', $this->ataque);
        $stmt->bindParam(':idTreinador', $this->idTreinador);

        return $stmt->execute();
    }
    public function update()
    {
        $query = 'UPDATE ' . $this->tabela . '
              SET nome = :nome,
                  tipo = :tipo,
                  nivel = :nivel,
                  altura = :altura,
                  peso = :peso,
                  vida = :vida,
                  genero = :genero,
                  forca = :forca,
                  velocidade = :velocidade,
                  defesa = :defesa,
                  ataque = :ataque,
                  idTreinador = :idTreinador
              WHERE idPokemon = :idPokemon';

        $stmt = $this->db->prepare($query);

        $stmt->bindParam(':nome', $this->nome);
        $stmt->bindParam(':tipo', $this->tipo);
        $stmt->bindParam(':nivel', $this->nivel);
        $stmt->bindParam(':altura', $this->altura);
        $stmt->bindParam(':peso', $this->peso);
        $stmt->bindParam(':vida', $this->vida);
        $stmt->bindParam(':genero', $this->genero);
        $stmt->bindParam(':forca', $this->forca);
        $stmt->bindParam(':velocidade', $this->velocidade);
        $stmt->bindParam(':defesa', $this->defesa);
        $stmt->bindParam(':ataque', $this->ataque);
        $stmt->bindParam(':idTreinador', $this->idTreinador);
        $stmt->bindParam(':idPokemon', $this->idPokemon);

        return $stmt->execute();
    }
    public function delete()
    {

        $query = 'DELETE FROM ' . $this->tabela . ' WHERE  idPokemon=:id';

        $stmt = $this->db->prepare($query);

        $stmt->bindParam(':id', $this->idPokemon);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }
    public function getPorTreinador()
    {
        $query = "SELECT *
              FROM " . $this->tabela . "
              WHERE idTreinador = :idTreinador";

        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':idTreinador', $this->idTreinador);
        $stmt->execute();

        return $stmt;
    }

    public function getMaisVelozes()
    {
        $query = "SELECT *
              FROM " . $this->tabela . "
              ORDER BY velocidade DESC
              LIMIT 5";

        $stmt = $this->db->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    public function getMelhoresAtaques()
    {
        $query = "SELECT *
              FROM " . $this->tabela . "
              ORDER BY ataque DESC
              LIMIT 5";

        $stmt = $this->db->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    public function getMelhoresDefesas()
    {
        $query = "SELECT *
              FROM " . $this->tabela . "
              ORDER BY defesa DESC
              LIMIT 5";

        $stmt = $this->db->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    public function existe($idPokemon)
    {
        $query = "SELECT idPokemon
              FROM " . $this->tabela . "
              WHERE idPokemon = :idPokemon";

        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':idPokemon', $idPokemon);
        $stmt->execute();

        return $stmt->rowCount() > 0;
    }
}
