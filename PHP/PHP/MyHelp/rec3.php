<?php
$idade = 10;

if ($idade < 12){
    echo "Criança";
}else if($idade >=13 && $idade <= 17){
    echo "Adolecente";
}else if($idade >= 18 && $idade <= 59){
    echo "Adulto";
}else {
    echo "Idoso";
}
?>