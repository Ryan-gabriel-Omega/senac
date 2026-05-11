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

SELECT * FROM equipamento;