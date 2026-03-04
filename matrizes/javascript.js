const matriz = [
    [1, 7, 2, 5],
    [8, 45, 82, 1],
    [2, 7, 3, 4],
    [10, 17, 14, 12]
];

let resultado = "";

for (let i = 0; i < matriz.length; i++) {
    
    for (let j = 0; j < matriz[i].length; j++) {
        
        resultado += matriz[i][j] + " ";
        
    }

    resultado += "\n";
}


document.getElementById("saida").innerText = resultado;