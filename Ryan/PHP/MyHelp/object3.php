<?php
class zombis
{ 
    private $nome = null;
    private $variante = null;

    public function __set($atributo, $valor)
    {
        if ($atributo == "nome") {
            $this->nome = $valor;
        } elseif ($atributo == "variante") {
            $this->variante = $valor;
        } else {
            echo "atributo invalido : $atributo<br>";
        }
    }
    public function __get($atributo) { 
    if ($atributo == "nome") {
        return $this->nome;
    } elseif ($atributo == "variante") {
        return $this->variante;
    }else {
        return "atributo nao existe<br>";
    }    }
}

$z = new zombis();

$z->nome = "Striker";
$z->variante = "Runer";

echo $z->nome;
echo "<br/>";
echo $z->variante;

?>
