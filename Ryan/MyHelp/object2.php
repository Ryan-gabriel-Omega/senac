<?php
class zombis {
    public $nome = null;
    public $variante = null;

     function resumirCard() {
        return "$this->nome variante : $this->variante ";       
    }
     function variante ($variante){
        $this->variante = $variante;
    }
     function modificarNome($nome){
        $this->nome = $nome;
    }
}

$zombis = new zombis;
$zombis -> modificarNome("Stiker");
$zombis -> variante("speed Z");
echo  $zombis -> resumirCard();
echo "<br/>";
$zombis2 = new zombis;
$zombis2 -> modificarNome("cruush");
$zombis2 -> variante("Tanque T");
echo $zombis2 -> resumirCard();
echo "<br/>";
$zombis3 = new zombis;
$zombis3 -> modificarNome("zombie");
$zombis3 -> variante("normal");
echo $zombis3 -> resumirCard();
?>

