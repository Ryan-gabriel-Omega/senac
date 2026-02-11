document.addEventListener("DOMContentLoaded", () => {

    const radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach(radio => {
        radio.addEventListener("change", calcularPontuacaoFinal);
    });

});

function calcularPontuacaoFinal() {
    let total = 0;


    const selecionados = document.querySelectorAll('input[type="radio"]:checked');

    selecionados.forEach(radio => {
        total += Number(radio.value);
    });


    const resultado = document.getElementById("resultado");
    if (resultado) {
        resultado.textContent = total;
    }

    mostrarAnalise(total);
}

