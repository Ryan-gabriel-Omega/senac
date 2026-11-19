CREATE DATABASE IF NOT EXISTS roteiro_caicara
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE roteiro_caicara;

CREATE TABLE IF NOT EXISTS cidades (
    id VARCHAR(50) PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    slogan VARCHAR(255),
    imagem VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS atracoes (
    id VARCHAR(50) PRIMARY KEY,
    cidade_id VARCHAR(50) NOT NULL,
    nome VARCHAR(150) NOT NULL,
    categoria VARCHAR(100),
    imagem VARCHAR(255),
    rua VARCHAR(200),
    numero VARCHAR(20),
    bairro VARCHAR(100),
    estado VARCHAR(50),
    horarios VARCHAR(255),
    historia TEXT,
    latitude DECIMAL(10,7),
    longitude DECIMAL(10,7),

    FOREIGN KEY (cidade_id)
        REFERENCES cidades(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS favoritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    atracao_id VARCHAR(50) NOT NULL UNIQUE,

    FOREIGN KEY (atracao_id)
        REFERENCES atracoes(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
