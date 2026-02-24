// Definindo a matriz 3x3 (Pode ser estoque, assentos, etc.)
const matriz = [
    ["0, 0", "0, 1", "0, 2"], // Linha 0
    ["1, 0", "1, 1", "1, 2"], // Linha 1
    ["2, 0", "2, 1", "2, 2"]  // Linha 2
];

const grade = document.getElementById('grade');
const log = document.getElementById('log');

// Criar a visualização inicial
matriz.forEach((linha, i) => {
    linha.forEach((valor, j) => {
        const div = document.createElement('div');
        div.classList.add('celula');
        div.id = `cel-${i}-${j}`;
        div.innerText = valor;
        grade.appendChild(div);
    });
});

// Função para dar uma pausa (para o aluno ver o movimento)
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function percorrerMatriz() {
    log.innerHTML = "Iniciando leitura...<br>";
    
    // FOR EXTERNO: Percorre as LINHAS
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