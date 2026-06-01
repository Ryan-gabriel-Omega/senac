<?php

$n1 = $_POST["n1"] ?? "";
$n2 = $_POST["n2"] ?? "";
$resultado = "";

if (isset($_POST["somar"])) {
    $resultado = $n1 + $n2;
} elseif (isset($_POST["subtrair"])) {
    $resultado = $n1 - $n2;
} elseif (isset($_POST["multiplicar"])) {
    $resultado = $n1 * $n2;
} elseif (isset($_POST["dividir"])) {

    if ($n2 == 0) {
        $resultado = "Não pode dividir por zero";
    } else {
        $resultado = $n1 / $n2;
    }
}
?>

<form method="POST">
    <input type="number" name="n1" value="<?php echo $n1; ?>">
    <input type="number" name="n2" value="<?php echo $n2; ?>">

    <button name="somar">Somar</button>
    <button name="subtrair">Subtrair</button>
    <button name="multiplicar">Multiplicar</button>
    <button name="dividir">Dividir</button>
</form>

<?php
echo $resultado;
?>
<br><br>
<?php include 'voltar.php'; ?>