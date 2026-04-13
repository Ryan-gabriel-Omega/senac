<?php
class funcionario {
    public $nome = null;
    public $telefone = null;
    public $numFilhos = null;

    function resumirCadFunc() {
        return "$this->nome possui $this->numFilhos filho(s)";
    }
    function modificarNumFilhos($numFilhos){
        $this->numFilhos = $numFilhos;
    }
    function modificarNome($nome){
        $this->nome = $nome;
    }

}

$func1 = new funcionario;
echo $func1->resumirCadFunc();
echo "<br/>";
$func1 -> modificarNome("rafael");
$func1 -> modificarNumFilhos(3);
echo $func1 -> resumirCadFunc();

$func2 = new funcionario;
echo $func2->resumirCadFunc();
echo "<br/>";
$func2 -> modificarNome("jose");
$func2 -> modificarNumFilhos(1);
echo $func2 -> resumirCadFunc();
?>