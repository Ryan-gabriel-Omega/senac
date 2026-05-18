<?php

abstract class Sobrevivente { 
    public $nome;

    public function __construct($nome) {
        $this->nome = $nome;
    }

    public function atacar(){
        echo "{$this->nome} atacou um zumbi!<br>";
    }

    abstract public function falar();
}

class Richtofen extends Sobrevivente {

    public function __construct() {
        parent::__construct("Richtofen");
    }

    public function falar() {
        echo "Richtofen: HAHAHA! Experimento interessante!<br>";
    }
}

class Dempsey extends Sobrevivente {

    public function __construct() {
        parent::__construct("Dempsey");
    }

    public function falar() {
        echo "Dempsey: Vamos explodir esses zumbis!<br>";
    }
}

class Nikolai extends Sobrevivente {

    public function __construct() {
        parent::__construct("Nikolai");
    }

    public function falar() {
        echo "Nikolai: Eu preciso de vodka... e mais balas!<br>";
    }
}

class Takeo extends Sobrevivente {

    public function __construct() {
        parent::__construct("Takeo");
    }

    public function falar() {
        echo "Takeo: Honra acima de tudo!<br>";
    }
    public function __destruct() {
        echo "Takeo saiu do jogo<br>";
    }
}

interface Equipamento {
    public function usarEquipamento();
}

class Arremesavel implements Equipamento {

    private $nome;

    public function __construct($nome) {
        $this->nome = $nome;
    }

    public function falarArremesso() {
        echo "Arremessando {$this->nome}!<br>";
    }

    public function usarEquipamento() {
        $this->falarArremesso();
    }
}

$richtofen = new Richtofen();
$dempsey = new Dempsey();
$nikolai = new Nikolai();
$takeo = new Takeo();

$richtofen->falar();
$dempsey->falar();
$nikolai->falar();
$takeo->falar();

$granada = new Arremesavel("Granada");
$semtex = new Arremesavel("Semtex");
$monkey = new Arremesavel("Monkey Bomb");

$granada->usarEquipamento();
$semtex->usarEquipamento();
$monkey->usarEquipamento();

?>