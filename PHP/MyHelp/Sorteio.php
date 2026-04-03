<?php
    $num = [];
    while (count($num) <= 5) {
    $rand = rand(1, 60);
    
    if(!in_array($rand, $num)){
        $num[] = $rand;
    } 
}

echo "<pre>";
var_dump($num) ;
echo "<pre>";

?>