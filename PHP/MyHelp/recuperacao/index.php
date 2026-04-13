<?php

$arquivos = scandir(".");

foreach ($arquivos as $arquivo) {

    if (
        strpos($arquivo, "rec_") === 0 &&
        pathinfo($arquivo, PATHINFO_EXTENSION) == "php"
    ) {
        echo "<a href='$arquivo'>📄 $arquivo</a><br>";
    }
}

?>