<?php
    echo '<h2>while list</h2>';  

    $listEletronico = ['Nootbok','Xbox','Pc','playstation','Nintendo','Celular'];

    $idx = 0;
    while ($idx < count($listEletronico))
    {
        echo $listEletronico[$idx];
        echo'<br>';
        $idx++;
    }
    echo '<hr>';
    
    echo '<h2> do while </h2>';

    $idx = 0;
    do {
        echo $listEletronico [$idx];
        echo '<br>';
        $idx++;
    
    }  while ($idx < count($listEletronico));
    echo '<hr>';

    echo '<h2>for</h2>';
    for ($idx = 0; ($idx < count($listEletronico)); $idx++)
    {  
        echo $listEletronico[$idx];
        echo'<br>';
    }
echo '<hr>';
$idx = 0;

echo '<h2>foreach</h2>';

    foreach($listEletronico as $idx)
        {
            echo $idx . '</br>';
        }
        echo '<hr>'

?>