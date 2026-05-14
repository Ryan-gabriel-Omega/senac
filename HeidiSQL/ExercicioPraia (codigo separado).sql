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

SELECT datahoraretirada, valorpago
FROM aluguel
WHERE pago = 1
AND formapagamento = 'card';

SELECT cliente.nomeCliente, COUNT(aluguel.idAluguel) AS AlgueisTotais
FROM cliente
JOIN aluguel ON cliente.idCliente = aluguel.idCliente
GROUP BY cliente.nomeCliente
HAVING COUNT(aluguel.idAluguel) > 2;
  
  
SELECT equipamento.nomeEquipamento,
SUM(aluguelequipamento.valorItem) AS total_arrecadado
FROM equipamento
JOIN aluguelequipamento 
ON equipamento.idEquipamento = aluguelequipamento.idEquipamento
GROUP BY equipamento.nomeEquipamento;

SELECT cliente.nomeCliente, SUM(aluguel.valorpago) AS ValorPagp
FROM cliente
JOIN aluguel
ON cliente.idCliente = aluguel.idCliente
GROUP BY cliente.nomeCliente;

SELECT nomeequipamento, valorhora
FROM equipamento
WHERE valorhora > (SELECT AVG(valorhora) FROM equipamento);

SELECT funcionario.nomeFuncionario, COUNT(aluguel.idAluguel) AS total_alugueis
FROM funcionario
JOIN aluguel 
ON funcionario.idFuncionario = aluguel.idFuncionario
GROUP BY funcionario.nomeFuncionario
ORDER BY total_alugueis DESC
LIMIT 1;

SELECT dataHoraRetirada
FROM aluguel
WHERE valorPagar > 100;

SELECT formaPagamento, SUM(valorPago) AS total_pago
FROM aluguel
GROUP BY formaPagamento;

SELECT equipamento.nomeEquipamento, COUNT(aluguelequipamento.idEquipamento) AS VezesAlugado
FROM equipamento
JOIN aluguelequipamento 
ON equipamento.idEquipamento = aluguelequipamento.idEquipamento
GROUP BY equipamento.nomeEquipamento
HAVING COUNT(aluguelequipamento.idEquipamento) > 3;

SELECT * FROM aluguel;
SELECT * FROM equipamento;

DROP DATABASE ExercicioPraia2;