<?php

$peso = $_GET ['peso'];
$altura = $_GET['altura'];
$imc = $peso / ($altura * $altura);

echo 'Seu Imc e de: '. round($imc,2) . '</br>';

if ($imc < 18.5){
    echo 'Voce esta abaixo do peso';
} else if ($imc == 18.5 || $imc < 24.9){
    echo 'voce esta com peso normal!';
} else {
    echo 'voce esta acima do peso!';
}

?>