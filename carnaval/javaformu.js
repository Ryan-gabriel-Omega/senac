let total = 0;
let somaIdade = 0;

let masculino = 0;
let feminino = 0;

let excelente = 0;
let bom = 0;
let regular = 0;
let pessimo = 0;

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let idade = parseInt(document.getElementById("idade").value);

    let sexo = document.querySelector('input[name="sexo"]:checked').value;

    let avaliacao = document.querySelector('input[name="avaliacao"]:checked').value;

    total++;
    somaIdade += idade;

    if (sexo === "masculino") masculino++;

    else feminino++;

    if (avaliacao === "excelente") excelente++;

    else if (avaliacao === "bom") bom++;

    else if (avaliacao === "regular") regular++;

    else pessimo++;

    this.reset();
});

function encerrar() {

    if (total === 0) {
        alert("Nenhuma resposta registrada!");
        return;
    }

    let media = (somaIdade / total).toFixed(2);

    let percMasc = ((masculino / total) * 100).toFixed(2);

    let percFem = ((feminino / total) * 100).toFixed(2);

    let percExc = ((excelente / total) * 100).toFixed(2);

    let percBom = ((bom / total) * 100).toFixed(2);

    let percReg = ((regular / total) * 100).toFixed(2);

    let percPes = ((pessimo / total) * 100).toFixed(2);

    document.getElementById("resultado").innerHTML = `

        <h2>Resultado Final</h2>

        Total de entrevistados: ${total}<br>

        Masculino: ${masculino} (${percMasc}%)<br>

        Feminino: ${feminino} (${percFem}%)<br>

        Média de idade: ${media}<br><br>

        Excelente: ${percExc}%<br>

        Bom: ${percBom}%<br>

        Regular: ${percReg}%<br>

        Péssimo: ${percPes}%`;
}