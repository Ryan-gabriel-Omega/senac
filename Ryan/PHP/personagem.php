<?php

class Personagem {

    private $nome;
    private $foto;
    private $historia;

    public function __construct($nome, $foto, $historia) {
        $this->nome = $nome;
        $this->foto = $foto;
        $this->historia = $historia;
    }

    public function getNome() {
        return $this->nome;
    }

    public function getFoto() {
        return $this->foto;
    }

    public function getHistoria() {
        return $this->historia;
    }
}

$personagens = [

    

    new Personagem(
    "Samuel Stuhlinger",
    "img/samuel.jpg",
    "Samuel Stuhlinger é um sobrevivente do apocalipse zumbi que possui uma ligação especial com o Éter. Ele consegue ouvir as vozes de Richtofen em sua mente, tornando-se uma peça fundamental nos acontecimentos de Black Ops 2 Zombies. Sua participação influencia diretamente os eventos dos mapas Tranzit, Die Rise e Buried."
    ),

    new Personagem(
    "Marlton Johnson",
    "img/marlton.jpg",
    "Marlton Johnson é um especialista em tecnologia eengenharia. Extremamente inteligente, ele procura explicações lógicas para os fenômenos que encontra durante a invasão zumbi. Apesar de seu conhecimento, muitas vezes entra em conflito com os outros membros do grupo devido à sua personalidade arrogante."
    ),

    new Personagem(
    "Abigail 'Misty' Briarton",
    "img/misty.jpg",
    "Misty é filha de um fazendeiro e cresceu aprendendo a sobreviver em situações difíceis. Corajosa e determinada, ela não tem medo de enfrentar hordas de zumbis. Sua personalidade forte e seu senso de humor fizeram dela uma das personagens mais populares da equipe Victis."
    ),

    new Personagem(
    "Russman",
    "img/russman.jpg",
    "Russman é um ex-funcionário da organização Broken Arrow. Devido aos experimentos e aos acontecimentos envolvendo o Elemento 115, ele sofre de problemas de memória. Apesar disso, possui conhecimentos importantes sobre os segredos do apocalipse zumbi e ajuda o grupo em sua jornada."
    )

];

$selecionado = null;

if(isset($_POST['personagem']) && $_POST['personagem'] !== '') {
    $selecionado = $personagens[$_POST['personagem']];
}

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Personagens COD Zombies</title>

<style>

body{
    background-color: #141414;
    color:white;
    font-family: Arial, sans-serif;
    text-align:center;
}

.container{
    width:800px;
    margin:auto;
    background:#2d2d2d;
    padding:20px;
    border-radius:10px;
    margin-top:30px;
}

select, button{
    padding:10px;
    font-size:16px;
    border-radius: 3px;
}

img{
    width:350px;
    margin-top:20px;
    border-radius:10px;
    border:3px solid #555;
}

.historia{
    margin-top:20px;
    text-align:justify;
    line-height:1.6;
}

</style>

</head>
<body>

<div class="container">

    <h1>Call of Duty Zombies - Origins</h1>

    <form method="POST">

        <select name="personagem">

            <option value="">Selecione um personagem</option>

            <?php foreach($personagens as $key => $personagem){ ?>

                <option value="<?= $key ?>">
                    <?= $personagem->getNome(); ?>
                </option>

            <?php } ?>

        </select>

        <button type="submit">
            Ver História
        </button>

    </form>

    <?php if($selecionado){ ?>

        <h2><?= $selecionado->getNome(); ?></h2>

        <img src="<?= $selecionado->getFoto(); ?>" alt="<?= $selecionado->getNome(); ?>">

        <div class="historia">
            <p><?= $selecionado->getHistoria(); ?></p>
        </div>

    <?php } ?>

</div>

</body>
</html>
