CREATE TABLE treinadores (
    idTreinador INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    idade INT
);

INSERT INTO treinadores (nome, idade) VALUES
('Lucas Ferreira', 14),
('Marina Okada', 16),
('Gabriel Santos', 12),
('Sofia Almeida', 15),
('Renan Costa', 18),
('Beatriz Nogueira', 13),
('Thiago Lima', 17),
('Júlia Yamamoto', 14),
('Pedro Henrique Souza', 19),
('Camila Ribeiro', 16);

CREATE TABLE pokemons (
    idPokemon INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    tipo VARCHAR(50),
    nivel INT
);

INSERT INTO pokemons (nome, tipo, nivel) VALUES
('Pikachu', 'Elétrico', 25),
('Charmander', 'Fogo', 15),
('Squirtle', 'Água', 18),
('Bulbasaur', 'Planta', 20),
('Gengar', 'Fantasma', 40),
('Lucario', 'Lutador', 52),
('Garchomp', 'Dragao', 60),
('Eevee', 'Normal', 12),
('Dragonite', 'Dragao', 65),
('Mewtwo', 'Psiquico', 100);

SELECT * FROM treinadores;

SELECT * FROM Pokemons;