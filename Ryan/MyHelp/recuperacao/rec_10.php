<?php
$op = $_POST["operacao"] ?? "";
$n1 = $_POST["n1"] ?? "";
$n2 = $_POST["n2"] ?? "";
$resultado = "";

if ($op == "somar") {
    $resultado = $n1 + $n2;
} elseif ($op == "subtrair") {
    $resultado = $n1 - $n2;
} elseif ($op == "multiplicar") {
    $resultado = $n1 * $n2;
} elseif ($op == "dividir") {
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

    <select name="operacao">
        <option value="somar">Somar</option>
        <option value="subtrair">Subtrair</option>
        <option value="multiplicar">Multiplicar</option>
        <option value="dividir">Dividir</option>
    </select>

    <button type="submit">Enviar</button>
</form>
<?php
echo $resultado;
?>
<br><br>
<?php include 'voltar.php'; ?>