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

function mostrarAnalise(total) {
    let texto = "";

    if (total >= 120 && total <= 150) {
        texto = "Você provavelmente já é um empreendedor, possui características fortes e grande potencial.";
    } else if (total >= 90) {
        texto = "Você possui muitas características empreendedoras, mas ainda pode evoluir.";
    } else if (total >= 60) {
        texto = "Você ainda não é muito empreendedor e tende a agir mais como administrador.";
    } else {
        texto = "Você não apresenta um perfil empreendedor no momento.";
    }

    const analise = document.getElementById("analise");
    if (analise) {
        analise.textContent = texto;
    }
}
