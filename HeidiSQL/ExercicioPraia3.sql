CREATE DATABASE ExercicioPraiaT;
USE ExercicioPraiaT;

CREATE TABLE Cliente (
    idCliente INT AUTO_INCREMENT PRIMARY KEY,
    nomeCliente VARCHAR(50),
    cpf CHAR(11)
);

CREATE TABLE Funcionario (
    idFuncionario INT AUTO_INCREMENT PRIMARY KEY,
    nomeFuncionario VARCHAR(50),
    cpf CHAR(11),
    celular CHAR(11)
);

CREATE TABLE Equipamento (
    idEquipamento INT AUTO_INCREMENT PRIMARY KEY,
    nomeEquipamento VARCHAR(50),
    qtd INT,
    valorHora DECIMAL(5,2)
);

CREATE TABLE Aluguel (
    idAluguel INT AUTO_INCREMENT PRIMARY KEY,
    idCliente INT,
    idFuncionario INT,
    dataHoraRetirada DATETIME,
    dataHoraDevolucao DATETIME,
    valorPagar DECIMAL(10,2),
    valorPago DECIMAL(10,2),
    pago BIT,
    formaPagamento VARCHAR(50),
    qtVezes INT,

    FOREIGN KEY (idCliente) REFERENCES Cliente(idCliente),
    FOREIGN KEY (idFuncionario) REFERENCES Funcionario(idFuncionario)
);

CREATE TABLE AluguelEquipamento (
    idAluguelEquipamento INT AUTO_INCREMENT PRIMARY KEY,
    idEquipamento INT,
    idAluguel INT,
    valorItem DECIMAL(10,2),
    valorUnitario DECIMAL(10,2),
    qtd INT,

    FOREIGN KEY (idEquipamento) REFERENCES Equipamento(idEquipamento),
    FOREIGN KEY (idAluguel) REFERENCES Aluguel(idAluguel)
);

ALTER TABLE cliente
ADD COLUMN email VARCHAR(150) UNIQUE NOT NULL;

ALTER TABLE cliente
ADD COLUMN cidade VARCHAR(50) NOT NULL;

ALTER TABLE cliente
ADD COLUMN estado CHAR(2) NOT NULL;


INSERT INTO cliente (
nomeCliente,
cpf,
email,
cidade,
estado
)
VALUES
('Donald','41578029874','donald@uol','Santos','SP'),
('Margarida','02589641587','margarida@uol','São Vicente','SP'),
('Patinhas','36985472103','patinhas@uol','Florianópolis','SC'),
('Huguinho','01245789630','huguinho@gmail','Santos','SP'),
('Luizinho','45781029874','luizinho@gmail','Praia Grande','SP'),
('Zezinho','02158639742','zezinho@gmail','São Vicente','SP'),
('Pardal','03697841520','pardal@uol','Santos','SP'),
('Zé Carioca','02151024780','zecarioca@uol','Rio de Janeiro','RJ'),
('Mickey','02360120965','mickey@hotmail','Recife','PE'),
('Minie','02102450690','minie@gmail','Recife','PE'),
('Pateta','021020542102','pateta@gmail','Santos','SP'),
('Branca de Neve','01245810201','brancadeneve@hotmail','São Joaquim','SC'),
('Aladin','01245789520','aladin@gmail','Belém','PA'),
('Cinderela','01254876201','cinderela@hotmail','Goiania','GO'),
('Mulan','01245782501','mulan@gmail','Rio das Ostras','RJ'),
('Moana','01021054207','moana@gmail','Parati','RJ'),
('Asnésio','01202236541','asnesio@uol','Belo Horizonte','MG'),
('Maga Patalógica','01245784102','maga@gmail','Cubatão','SP'),
('Capitão Boeing','01201548741','capitaoboeing@uol','Manaus','AM'),
('Pão Duro Mac Money','01245852012','paoduro@ig','Osasco','SP');


INSERT INTO funcionario (
nomeFuncionario,
cpf,
celular
)
VALUES
('Cebolinha', '11122233344', '13991111111'),
('Cascão', '55566677788', '13992222222'),
('Chico Bento', '99900011122', '13993333333');


INSERT INTO equipamento (
nomeEquipamento,
qtd,
valorHora
)
VALUES
('Cadeiras 02 posições', 50, 2.00),
('Cadeiras 04 posições', 100, 3.50),
('Guarda Sol P', 40, 2.00),
('Guarda Sol G', 60, 3.00),
('Mesinha', 30, 1.50);


-- ALUGUEL 1

INSERT INTO aluguel (
idCliente,
idFuncionario,
dataHoraRetirada,
dataHoraDevolucao,
valorPagar,
valorPago,
pago,
formaPagamento,
qtVezes
)
VALUES (
11,
1,
'2024-12-08 08:00:00',
'2024-12-08 12:00:00',
2.00,
NULL,
0,
NULL,
1
);

INSERT INTO aluguelequipamento (
idEquipamento,
idAluguel,
valorItem,
valorUnitario,
qtd
)
VALUES (
1,
LAST_INSERT_ID(),
2.00,
2.00,
1
);

UPDATE equipamento
SET qtd = qtd - 1
WHERE idEquipamento = 1;


-- ALUGUEL 2

INSERT INTO aluguel (
idCliente,
idFuncionario,
dataHoraRetirada,
dataHoraDevolucao,
valorPagar,
valorPago,
pago,
formaPagamento,
qtVezes
)
VALUES (
9,
3,
'2024-12-10 09:00:00',
'2024-12-10 15:00:00',
10.00,
10.00,
1,
'Pix',
1
);

INSERT INTO aluguelequipamento (
idEquipamento,
idAluguel,
valorItem,
valorUnitario,
qtd
)
VALUES (
2,
LAST_INSERT_ID(),
7.00,
3.50,
2
);

INSERT INTO aluguelequipamento (
idEquipamento,
idAluguel,
valorItem,
valorUnitario,
qtd
)
VALUES (
4,
2,
3.00,
3.00,
1
);

UPDATE equipamento
SET qtd = qtd - 2
WHERE idEquipamento = 2;

UPDATE equipamento
SET qtd = qtd - 1
WHERE idEquipamento = 4;


-- ALUGUEL 3

INSERT INTO aluguel (
idCliente,
idFuncionario,
dataHoraRetirada,
dataHoraDevolucao,
valorPagar,
valorPago,
pago,
formaPagamento,
qtVezes
)
VALUES (
15,
1,
'2024-12-27 10:00:00',
'2024-12-27 14:00:00',
2.00,
2.00,
1,
'Dinheiro',
1
);

INSERT INTO aluguelequipamento (
idEquipamento,
idAluguel,
valorItem,
valorUnitario,
qtd
)
VALUES (
3,
LAST_INSERT_ID(),
2.00,
2.00,
1
);

UPDATE equipamento
SET qtd = qtd - 1
WHERE idEquipamento = 3;


-- ALUGUEL 4

INSERT INTO aluguel (
idCliente,
idFuncionario,
dataHoraRetirada,
dataHoraDevolucao,
valorPagar,
valorPago,
pago,
formaPagamento,
qtVezes
)
VALUES (
14,
1,
'2024-12-27 11:00:00',
'2024-12-27 15:00:00',
2.00,
2.00,
1,
'Cartão',
1
);

INSERT INTO aluguelequipamento (
idEquipamento,
idAluguel,
valorItem,
valorUnitario,
qtd
)
VALUES (
3,
LAST_INSERT_ID(),
2.00,
2.00,
1
);

UPDATE equipamento
SET qtd = qtd - 1
WHERE idEquipamento = 3;


-- ALUGUEL 5

INSERT INTO aluguel (
idCliente,
idFuncionario,
dataHoraRetirada,
dataHoraDevolucao,
valorPagar,
valorPago,
pago,
formaPagamento,
qtVezes
)
VALUES (
10,
1,
'2024-12-27 13:00:00',
'2024-12-27 17:00:00',
2.00,
2.00,
1,
'Pix',
1
);

INSERT INTO aluguelequipamento (
idEquipamento,
idAluguel,
valorItem,
valorUnitario,
qtd
)
VALUES (
3,
LAST_INSERT_ID(),
2.00,
2.00,
1
);

UPDATE equipamento
SET qtd = qtd - 1
WHERE idEquipamento = 3;


-- ALUGUEL 6

INSERT INTO aluguel (
idCliente,
idFuncionario,
dataHoraRetirada,
dataHoraDevolucao,
valorPagar,
valorPago,
pago,
formaPagamento,
qtVezes
)
VALUES (
1,
3,
'2024-12-28 09:00:00',
'2024-12-28 18:00:00',
10.00,
10.00,
1,
'Cartão',
2
);

INSERT INTO aluguelequipamento (
idEquipamento,
idAluguel,
valorItem,
valorUnitario,
qtd
)
VALUES (
2,
LAST_INSERT_ID(),
7.00,
3.50,
2
);

INSERT INTO aluguelequipamento (
idEquipamento,
idAluguel,
valorItem,
valorUnitario,
qtd
)
VALUES (
4,
6,
3.00,
3.00,
1
);

UPDATE equipamento
SET qtd = qtd - 2
WHERE idEquipamento = 2;

UPDATE equipamento
SET qtd = qtd - 1
WHERE idEquipamento = 4;

SELECT dataHoraRetirada, valorPago
FROM Aluguel
WHERE formaPagamento = 'card';

select cliente.nomeCliente, COUNT(aluguel.idAluguel) AS AlugueisTotais
FROM cliente
join aluguel
ON cliente.idCliente = aluguel.idCliente
GROUP BY cliente.nomeCliente
HAVING COUNT(ALUGUEL.idAluguel) > 2

SELECT * FROM cliente;

SELECT * FROM funcionario;

SELECT * FROM equipamento;

SELECT * FROM aluguel;

SELECT * FROM aluguelequipamento;
 
SHOW DATABASES;