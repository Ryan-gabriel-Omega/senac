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

    <?php
    if (isset($_SESSION["nome"])) {
        echo "Olá, " . $_SESSION["nome"];
    }

    ?>


</body>

</html>