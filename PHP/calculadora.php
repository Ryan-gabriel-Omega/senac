<?php

class Calculadora
{

    public function somar($a, $b)
    {
        return $a + $b;
    }

    public function subtrair($a, $b)
    {
        return $a - $b;
    }

    public function multiplicar($a, $b)
    {
        return $a * $b;
    }

    public function dividir($a, $b)
    {
        if ($b == 0) {
            return "Erro: divisão por zero";
        }
        return $a / $b;
    }
}

$calc = new Calculadora();

echo "essa e a soma   =>  ". $calc->somar(5, 20) . "<br>";

echo "essa e a subtraçõao   =>  ". $calc->subtrair(5, 3) . "<br>";

echo "essa e a multiplicação   =>  ". $calc->multiplicar(4, 4) . "<br>";

echo "essa e a divisão    =>  ". $calc->dividir(10, 2);
