apipizzaCREATE TABLE treinadores (
    idTreinador INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    altura DECIMAL(4,2),
    peso DECIMAL(5,2),
    idade INT,
    nivel INT
);

INSERT INTO treinadores (nome, altura, peso, idade, nivel) VALUES
('Lucas Ferreira', 1.65, 55.0, 14, 10),
('Marina Okada', 1.60, 50.0, 16, 15),
('Gabriel Santos', 1.50, 45.0, 12, 8),
('Sofia Almeida', 1.58, 48.0, 15, 12),
('Renan Costa', 1.80, 72.0, 18, 20),
('Beatriz Nogueira', 1.55, 47.0, 13, 9),
('Thiago Lima', 1.75, 68.0, 17, 18),
('Júlia Yamamoto', 1.62, 52.0, 14, 11),
('Pedro Henrique Souza', 1.85, 78.0, 19, 25),
('Camila Ribeiro', 1.68, 56.0, 16, 14);

CREATE TABLE pokemons (
    idPokemon INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    tipo VARCHAR(50),
    nivel INT,
    altura DECIMAL(4,2),
    peso DECIMAL(5,2),
    vida INT,
    genero VARCHAR(20),
    forca INT,
    velocidade INT,
    defesa INT,
    ataque INT,
    idTreinador INT,
    
    FOREIGN KEY (idTreinador)
        REFERENCES treinadores(idTreinador)
);

INSERT INTO pokemons
(nome, tipo, nivel, altura, peso, vida, genero, forca, velocidade, defesa, ataque, idTreinador)
VALUES
('Pikachu', 'Eletrico', 25, 0.40, 6.0, 100, 'M', 55, 90, 40, 50, 1),
('Charmander', 'Fogo', 15, 0.60, 8.5, 85, 'M', 52, 65, 43, 60, 1),
('Squirtle', 'Agua', 18, 0.50, 9.0, 95, 'F', 48, 43, 65, 50, 2),
('Bulbasaur', 'Planta', 20, 0.70, 6.9, 100, 'M', 49, 45, 49, 49, 2),
('Gengar', 'Fantasma', 40, 1.50, 40.5, 150, 'M', 65, 110, 60, 130, 3),
('Lucario', 'Lutador', 52, 1.20, 54.0, 180, 'M', 110, 90, 70, 115, 4),
('Garchomp', 'Dragao', 60, 1.90, 95.0, 220, 'F', 130, 102, 95, 125, 5),
('Eevee', 'Normal', 12, 0.30, 6.5, 75, 'F', 55, 55, 50, 55, 6),
('Dragonite', 'Dragao', 65, 2.20, 210.0, 250, 'M', 134, 80, 95, 100, 7),
('Mewtwo', 'Psiquico', 100, 2.00, 122.0, 350, 'N', 110, 130, 90, 154, 8);

SELECT * FROM treinadores;

SELECT * FROM pokemons;


