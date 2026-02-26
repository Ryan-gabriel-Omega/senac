const matriz = [
    ["0, 0", "0, 1", "0, 2"],
    ["1, 0", "1, 1", "1, 2"],
    ["2, 0", "2, 1", "2, 2"]
];

const grade = document.getElementById('grade')

const log = document.getElementById('log')

matriz.forEach((linha, i) => {
    linha.forEach((valor, j) => {
        const div = document.createElement('div')
        div.classList.add('celula')
        div.id = `cel-${i}-${j}`
        div.innerText = valor
        grade.appendChild(div)

    });
});



for (let i = 0; j < matriz.length; i++) {
    
    for (let j = 0; j < matriz[i].length; j++) {
        const id = `cel-${i}-${j}`;
        const elementoHtml = document.getElementById(id);
    }

}



for (let i = 0; i < matriz.length; i++) {

    // FOR INTERNO: Percorre as COLUNAS daquela linha
    for (let j = 0; j < matriz[i].length; j++) {
        const id = `cel-${i}-${j}`;
        const elementoHtml = document.getElementById(id);

        // Destacar célula atual
        elementoHtml.classList.add('ativo');
        log.innerHTML += `Lendo: Linha ${i}, Coluna ${j} -> <strong>${matriz[i][j]}</strong><br>`;

        await sleep(1800); // Pausa para explicação visual

        elementoHtml.classList.remove('ativo');
    }
    log.innerHTML += `--- Fim da linha ${i} ---<br>`;
}
log.innerHTML += "<strong>Fim do percurso!</strong>";
}