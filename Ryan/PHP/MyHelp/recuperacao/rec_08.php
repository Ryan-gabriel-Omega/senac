<?php
if (isset($_POST["numero"])) {
    $numero = $_POST["numero"];
}
?>

<!DOCTYPE html>

<html>

<body>

    <form method="POST">
        
        <input type="number" name="numero" placeholder="Número" .focus>
        
        <button type="submit">enviar</button>

    </form>
<?php
if (isset($numero)) {
    if ($numero % 2 == 0) {
        echo "o Número e PAR";
    }else {
        echo "O Número e IMPAR";
    }
}

?>

</body>

</html>
<br> <br>

<?php include 'voltar.php'; ?>