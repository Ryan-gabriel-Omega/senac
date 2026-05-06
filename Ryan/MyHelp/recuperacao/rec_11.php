<?php

$nome = $_POST["nome"] ?? "";
$nota1 = $_POST["nota1"] ?? "";
$nota2 = $_POST["nota2"] ?? "";
$nota3 = $_POST["nota3"] ?? "";

$media = $_POST["media"] ?? "";
$status = $_POST["status"] ?? "";

if ($nota1 !== "" && $nota2 !== "" && $nota3 !== "") {


    $media = ($nota1 + $nota2 + $nota3) / 3;

    if ($media >= 7) {
        $status = "Aprovado";
    } elseif ($media >= 5) {
        $status = "Recuperação";
    } else {
        $status = "Reprovado";
    }
}
?>

<form method="POST">
    <input type="text" name="nome" value="<?php echo $nome; ?>" placeholder="Nome"><br>

    <input type="number" name="nota1" value="<?php echo $nota1; ?>" placeholder="Nota 1"><br>
    <input type="number" name="nota2" value="<?php echo $nota2; ?>" placeholder="Nota 2"><br>
    <input type="number" name="nota3" value="<?php echo $nota3; ?>" placeholder="Nota 3"><br>

    <button type="submit">enviar</button>


</form>

<?php

if ($media !== "") {
    echo "Nome: $nome <br>";
    echo "Média: $media <br>";
    echo "Situação: $status";
}
?>
<br><br>
<?php include 'voltar.php'; ?>
