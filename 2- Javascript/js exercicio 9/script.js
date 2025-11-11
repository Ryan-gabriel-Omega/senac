let but = document.getElementById(`botao`)
let tabela = []

function adicione() {
    let input = document.getElementById(`num`)
    let valor = Number(input.value)

    if (input.value === "") {
        alert("Digite um número primeiro!");
        return;
    }

    tabela.push(valor)
    document.getElementById('lista').textContent = tabela.join(', ')

    input.value = ""
    input.focus()
}

function finalizar() {
    if (tabela.length === 0) {
        alert("adicione numero antes de calcular")
        return
    }
    let soma = 0
    for (let i = 0; i < tabela.length; i++) { 
        soma += tabela[i]
}
    let media = soma / tabela.length;
    document.getElementById('resultado').textContent = media.toFixed(2);
}
2