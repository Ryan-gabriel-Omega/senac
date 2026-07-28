CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    cep VARCHAR(10),
    estado VARCHAR(50),
    cidade VARCHAR(100),
    bairro VARCHAR(100),
    rua VARCHAR(150),
    numero VARCHAR(10),
    complemento VARCHAR(100),
    tipo ENUM('cliente', 'admin') DEFAULT 'cliente'
);

CREATE TABLE produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    estoque INT NOT NULL,
    categoria VARCHAR(100),
    imagem VARCHAR(255)
);

CREATE TABLE pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10,2),
    status VARCHAR(30),

    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE item_pedido (
    id_pedido INT,
    id_produto INT,
    quantidade INT,
    preco DECIMAL(10,2),

    PRIMARY KEY (id_pedido, id_produto),

    FOREIGN KEY (id_pedido) REFERENCES pedido(id),
    FOREIGN KEY (id_produto) REFERENCES produto(id)
);

