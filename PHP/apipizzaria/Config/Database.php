<?php
class Database
{

    private $host;

    private $port;

    private $db_name;

    private $username;

    private $password;

    private $conection;

    // Método para obter a conexão com o banco de dados
    public function getConnection()
    {
        $this->conection = null;

        try {
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
