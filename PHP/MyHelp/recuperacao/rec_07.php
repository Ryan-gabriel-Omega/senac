<?php

session_start();

if (isset($_POST["nome"])) {
    $_SESSION["nome"] = $_POST["nome"];
}
if (isset ($_POST["limpar"])) {
    unset($_SESSION["nome"]);
}
?>

<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
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

    <form method="POST">

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