<?php
if (isset($_POST["nome"])) {
    $nome = $_POST["nome"];
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
    <?php
    if (isset($nome) && $nome !="") {
        echo "Olá, $nome";
    }
    ?>

</body>

</html>
<br><br>

<?php include 'voltar.php'; ?>