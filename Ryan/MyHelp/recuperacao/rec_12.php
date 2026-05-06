<?php 

$nome = $_POST["nome"] ?? "";
$idade = $_POST["idade"] ?? "";
$erro = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if ($nome == "") {
        $erro = "Digite um nome<br>";
    }

    if ($idade == "") {
        $erro .= "Digite sua idade<br>";
    }

    if ($erro == "") {
        echo "Olá, $nome <br> Você tem $idade anos<br>";

        if ($idade >= 18) {
            echo "Você é maior de idade";
        } else {
            echo "Você é menor de idade";
        }
    }
}
?>

<form method="POST">
    <input type="text" name="nome" value="<?php echo $nome; ?>">
    
    <input type="number" name="idade" value="<?php echo $idade; ?>">
    
    <button type="submit">Enviar</button>
</form>

<?php
echo $erro;
?>
<br><br>
<?php include 'voltar.php'; ?>