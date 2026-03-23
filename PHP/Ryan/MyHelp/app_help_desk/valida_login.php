<?php
session_start();

require "config.php";

$email = $_GET['email'];

$senha = md5($_GET['senha']);

$sql = "SELECT id_usuario, nome, email, perfil FROM usuarios WHERE email = '$email' AND senha = '$senha'";

$res = $conexao->query($sql);

$usuario = $res->fetch_object();

if($usuario){

    $_SESSION['autenticado'] = 'sim';
    
    $_SESSION['id'] = $usuario->id_usuario;
    
    $_SESSION['perfil'] = $usuario->perfil;

    header('location: home.php');

} else {

    header('location: index.php?login=erro');
}
?>