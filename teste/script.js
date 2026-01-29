function clicou() {
    document.getElementById(`testp`).textContent = `click texto`
}
function criar() {
    const caixa = document.createElement(`div`)
    caixa.textContent = `div criada pelo javascript`
    caixa.style.color = `rgb(120, 212, 212)`
    caixa.style.padding = `100px`
    caixa.style.backgroud = `rgb(104, 104, 104)`
    caixa.style.margin = `25px`
    caixa.style.position = `relative`

    const botaof = document.createElement(`button`)
    botaof.textContent = `X`
    botaof.style.padding = `7.5px`
    botaof.style.position = `absolute`
    botaof.style.top = `5px`
    botaof.style.right = `5px`
    botaof.style.cursor = `pointer`
    
    botaof.onclick = function () {
        caixa.remove()
    }

    caixa.appendChild(botaof)

    document.body.appendChild(caixa)

}
function concluir() {
    let input = document.getElementById("meuInput")
    let texto = input.value

    if (texto === "") {
        alert("o input esta vazio")
    } else {
        alert("voce digitou " + texto)
    }

    input.value = ""
   
    input.focus()
}
