CREATE DATABASE JucaCursos;
USE JucaCursos;


CREATE TABLE alunos (
id_aluno INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(150) UNIQUE NOT NULL,
data_nascimento DATE NOT NULL
);


CREATE TABLE cursos (
id_curso INT AUTO_INCREMENT PRIMARY KEY,
nome_curso VARCHAR(150) NOT NULL,
carga_horaria INT NOT NULL CHECK (carga_horaria > 0),
valor DECIMAL(10,2) NOT NULL DEFAULT 0.00
);



INSERT INTO alunos (nome, email, data_nascimento)
VALUES
('Ana Souza', 'ana@gmail.com', '2005-03-10'),
('Bruno Lima', 'bruno@gmail.com', '2000-07-21'),
('Carla Mendes', 'carla@gmail.com', '2003-11-05'),
('Daniel Rocha', 'daniel@gmail.com', '1997-01-18'),
('Amanda Silva', 'amanda@gmail.com', '2006-09-30');


INSERT INTO cursos (nome_curso, carga_horaria, valor)
VALUES
('SQL Básico – Uma linguagem para banco de dados', 40, 299.90),
('Java Fundamentos', 60, 399.90),
('C# para Iniciantes', 50, 349.90),
('Banco de Dados Avançado', 80, 499.90),
('Lógica de Programação', 30, 199.90);


SELECT * FROM cursos;


SELECT nome
FROM alunos
WHERE TIMESTAMPDIFF(YEAR, data_nascimento, CURDATE()) > 21;


SELECT *
FROM cursos
WHERE valor < 400;



SELECT *
FROM alunos
WHERE nome LIKE 'A%';



SELECT nome_curso, valor
FROM cursos
WHERE nome_curso LIKE '%Banco%';


SELECT *
FROM alunos
ORDER BY nome ASC;


SELECT *
FROM cursos
ORDER BY valor DESC;



UPDATE alunos
SET email = 'ana@gmail.com.br'
WHERE nome = 'Ana Souza';



UPDATE cursos
SET valor = 390.99
WHERE nome_curso = 'C# para Iniciantes';



DELETE FROM alunos
WHERE nome = 'Daniel Rocha';


SELECT
nome,
email,
data_nascimento,
TIMESTAMPDIFF(YEAR, data_nascimento, CURDATE()) AS idade
FROM alunos
ORDER BY idade DESC;


SHOW DATABASES;



SELECT * FROM cliente;

SELECT cliente.nomecliente, aluguel.dataHoraRetirada
FROM cliente
JOIN aluguel
ON cliente.idCliente = aluguel.idCliente;

SELECT equipamento.nomeEquipamento, aluguel.dataHoraRetirada, aluguelequipamento.qtd
FROM aluguel
JOIN aluguelequipamento
ON aluguel.idAluguel = aluguelequipamento.idAluguel
JOIN equipamento
ON equipamento.idEquipamento = aluguelequipamento.idEquipamento;

SELECT funcionario.nomeFuncionario, aluguel.dataHoraRetirada
FROM funcionario
JOIN aluguel
ON funcionario.idFuncionario = aluguel.idFuncionario;

SELECT COUNT(*) FROM cliente;

SELECT cliente.nomeCliente, COUNT(aluguel.idAluguel) AS total_alugueis
FROM cliente
JOIN aluguel ON cliente.idCliente = aluguel.idCliente
GROUP BY cliente.nomeCliente;

SELECT MAX(valorPagar) AS MaiorValor
FROM aluguel;

SELECT MIN(valorPagar) AS MenorValor
FROM aluguel;

SELECT AVG(valorpagar) AS MEdiaPagamento
FROM aluguel;

SELECT SUM(valorpagar) AS TotalPago
FROM aluguel;

SELECT nomeEquipamento, qtd
FROM equipamento
WHERE qtd > 40;

SELECT 

SELECT * FROM equipamento;