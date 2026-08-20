const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

let indice = 0;

document.getElementById("proximo").onclick = () => {
    indice++;

    if(indice >= totalSlides){
        indice = 0;
    }

    atualizar();

}

document.getElementById("anterior").onclick = () => {
    indice--;

    if(indice <0){
        indice = totalSlide - 1;
    }

    atualizar();

}

function atualizar(){
    slides.computedStyleMap.transform = 'translateX(-${indice * 600}px';
}