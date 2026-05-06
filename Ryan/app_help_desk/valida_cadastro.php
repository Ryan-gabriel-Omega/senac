<?php
include('config.php');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: cadastro.php');
    exit();
}

$nome = $conexao->real_escape_string($_POST['nome']);
$email = $conexao->real_escape_string($_POST['email']);
$senha = md5($_POST['senha']); // para exercícios
$perfil = $conexao->real_escape_string($_POST['perfil']);

if($perfil === "") {
    header('Location: cadastro.php?validaperfil=erro');
    exit();
}


$sql_check = "SELECT * FROM usuarios WHERE email='$email'";
$res = $conexao->query($sql_check);

if($res->num_rows > 0){
    header('Location: cadastro.php?email=erro');
    exit();
}

$sql_insert = "INSERT INTO usuarios(nome,email,senha,perfil) VALUES('$nome','$email','$senha','$perfil')";
if($conexao->query($sql_insert)){
    header('Location: index.php?usuario=sucesso');
    exit();
} else {
    header('Location: cadastro.php?usuario=falha');
    exit();
}