<?php

session_start();

if (isset($_POST["nome"])) {
    $_SESSION["nome"] = $_POST["nome"];
}

?>

<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            margin: 20px;
        }
    </style>
</head>

<body>



    <form method="POST">

        <input type="text" name="nome" placeholder="Nome">

        <button type="submit">Enviar</button>

       </form>

       <form form="POST">
        <button type="submit" name="limpar">limpar nome</button> 

      </form>

    <?php
    if (isset($_SESSION["nome"])) {
        echo "Olá, " . $_SESSION["nome"];
    }

    ?>


</body>

</html>
<br><br>

<?php include 'voltar.php'; ?>