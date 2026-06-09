<?php

namespace Apipokemon\Config;

use PDO;
use PDOException;
use Throwable;

class Database
{
    private $host = '127.0.0.1';
    private $port = '3306';

    private $db_name = 'apipokemon';

    private $username = 'root';
    private $password = "";

    private $connection;

    public function getConnection()
    {
        $this->connection = null;

        try {

            $dsn = 'mysql:host=' . $this->host .
                   ';port=' . $this->port .
                   ';dbname=' . $this->db_name .
                   ';charset=utf8mb4';

            $this->connection = new PDO(
                $dsn,
                $this->username,
                $this->password
            );

            $this->connection->setAttribute(
                PDO::ATTR_ERRMODE,
                PDO::ERRMODE_EXCEPTION
            );

        } catch (PDOException $e) {

            http_response_code(500);
            echo json_encode([
                "erro" => "Erro de conexão com banco",
                "detalhe" => $e->getMessage()
            ]);

        } catch (Throwable $e) {

            http_response_code(500);
            echo json_encode([
                "erro" => "Erro geral",
                "detalhe" => $e->getMessage()
            ]);
        }

        return $this->connection;
    }
}