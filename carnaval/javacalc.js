function calcular() {

    let tipo = document.getElementById("tipoCalculo").value;

    let C = parseFloat(document.getElementById("capital").value);
    let J = parseFloat(document.getElementById("juros").value);
    let i = parseFloat(document.getElementById("taxa").value) / 100;
    let t = parseFloat(document.getElementById("tempo").value);

    let resultado = "";
    
    if (tipo === "montante") {

        let M = C * Math.pow((1 + i), t);
        let juros = M - C;

        resultado = `
        Montante: R$ ${M.toFixed(2)} <br>
        Juros: R$ ${juros.toFixed(2)}
        `;
    }

    else if (tipo === "capital") {

        let M = J + C;

        let capital = M / Math.pow((1 + i), t);

        resultado = `Capital: R$ ${capital.toFixed(2)}`;
    }

    else if (tipo === "taxa") {

        let M = C + J;

        let taxa = Math.pow((M / C), (1 / t)) - 1;

        resultado = `Taxa: ${(taxa * 100).toFixed(2)} %`;
    }


    else if (tipo === "tempo") {

        let M = C + J;

        let tempo = Math.log(M / C) / Math.log(1 + i);

        resultado = `Prazo: ${tempo.toFixed(2)} períodos`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}