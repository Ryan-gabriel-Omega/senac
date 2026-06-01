<?php

$nota= 10;

if ($nota >= 7) {
    echo 'Aprovado';
}
elseif ($nota >= 5 && $nota < 7 ) {
    echo 'você está de recuperaçâo';
}
else {
    echo 'Reprovado';
}
    
?>
<br><br>

<?php include 'voltar.php'; ?>