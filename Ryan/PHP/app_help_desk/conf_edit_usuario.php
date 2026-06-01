<?php
    require_once "validador_acesso.php";
    require 'config.php';

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $perfil = $_POST['perfil'];
    $id_usuario = $_POST['id_usuario'];

    $sql = "UPDATE usuarios SET nome = '$nome', email = '$email', perfil = '$perfil' WHERE id_usuario = $id_usuario";

    $res = $conexao->query($sql);

        if($res==true){

            header('location: usuarios.php?edicao=sucesso');
        } else { header('location: usuarios.php?edicao=falha');}
?>