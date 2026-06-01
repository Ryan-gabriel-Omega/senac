<?php

namespace Apipizzaria\Config;
use PDO;
use PDOException;
use Throwable;

class Database
{

    private $host='127.0.0.1';

    private $port='3306';

    private $db_name='apipizza';

    private $username='root';

    private $password="";

    private $conection;

    
    public function getConnection()
    {
        $this->conection = null;

        try {
            //$resultado=$this->dividir(10,2);
            // DSN (Data Source Name) - String de conexão
            $dsn = 'mysql:host=' . $this->host . ';port=' . $this->port . ';dbname=' . $this->db_name . ';charset=utf8';
            // Instancia o objeto PDO
            $this->conection = new PDO($dsn, $this->username, $this->password);
            // Define o modo de erro do PDO para exceção
            // Isso faz com que o PDO lance exceções em caso de erros, facilitando o tratamento
            $this->conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            // Em caso de erro na conexão, exibe a mensagem de erro
            echo 'Erro de Conexão: ' . $e->getMessage();
        } catch (Throwable $e) { 
            echo 'erro' . $e-> getMessage();
        }

        return $this->conection;
    }
}
?>