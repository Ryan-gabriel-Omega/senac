let botao = document.getElementById('num')
let resultado = document.getElementById('resultado')

function calcule() {
    try {
        let numero = Number(num.value)
        if (numero < 0) {
            throw new Error("Numero negativo não e permitido")
        }
        let raiz = Math.sqrt(numero)
        resultado.innerHTML = `A raiz quadrada e ${raiz}`
    } catch (e) {
        window.alert(e)
    } finally {
        console.log('finally')
    }
}