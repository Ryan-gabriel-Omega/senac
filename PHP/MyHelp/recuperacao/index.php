<?php

$rec = ["rec_1", "rec_2", "rec_3", "rec_4", "rec_5", "rec_6", "rec_7"];

foreach ($rec as $arquivo) {
    echo "<a href='$arquivo.php'>abrir $arquivo</a><br>";
}
?>