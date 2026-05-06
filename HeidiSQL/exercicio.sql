
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


CREATE TABLE Aluguel (
    idAluguel INT AUTO_INCREMENT PRIMARY KEY,
    idCliente INT,
    idFuncionario INT,
    dataHoraRetirada DATETIME,
    dataHoraDevolucao DATETIME,
    valorApagar DECIMAL(10,2),
    valorPago DECIMAL(10,2),
    pago BIT,
    formaPagamento VARCHAR(50),
    qtVezes INT,
    CONSTRAINT FK_Aluguel_Cliente FOREIGN KEY (idCliente) REFERENCES Cliente(idCliente) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT FK_Aluguel_Funcionario FOREIGN KEY (idFuncionario) REFERENCES Funcionario(idFuncionario) ON DELETE RESTRICT ON UPDATE CASCADE
);


CREATE TABLE Equipamento (
    idEquipamento INT AUTO_INCREMENT PRIMARY KEY,
    nomeEquipamento VARCHAR(50),
    qtd INT,
    valorHora DECIMAL(5,2)
);

exerciciopraia
CREATE TABLE AluguelEquipamento (
    idAluguelEquipamento INT AUTO_INCREMENT PRIMARY KEY,
    idAluguel INT,
    idEquipamento INT,
    valorItem DECIMAL(10,2),
    valorUnitario DECIMAL(10,2),
    qtd INT,
    CONSTRAINT FK_AluguelEquipamento_Aluguel FOREIGN KEY (idAluguel) REFERENCES Aluguel(idAluguel) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT FK_AluguelEquipamento_Equipamento FOREIGN KEY (idEquipamento) REFERENCES Equipamento(idEquipamento) ON DELETE RESTRICT ON UPDATE CASCADE
);