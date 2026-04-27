<?php

class Produto {
    public static $tipo = 'geral';

    public static function getTipoSelf() {
        return self::$tipo;
    }

    public static function getTipoStatic() {
        return static::$tipo;
    }
}

class Eletronico extends Produto {
    public static $tipo = 'eletrônico';
}

// Teste
echo 'Self: ';
echo Eletronico::getTipoSelf();

echo '<br>';

echo 'Static: ';
echo Eletronico::getTipoStatic();

?>