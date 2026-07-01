const API =
    "https://hp-api.onrender.com/api/characters";


const cards = document.querySelector("#cards");
const btnMais = document.querySelector("#btnMais");
const busca = document.querySelector("#busca");

let personagens = [];

let quantidade = 14;

fetch(API)

    .then(res => res.json())

    .then(dados => {

        personagens = dados;

        mostrarPersonagens();

    }
    );

function mostrarPersonagens() {

    cards.innerHTML = "";

    personagens
        .slice(0, quantidade)
        .forEach(personagem => {

            cards.innerHTML += `

        <div class="card">

            <img 
            src="${personagem.image}"
            alt="${personagem.name}"
            >

            <h2>
            ${personagem.name}
            </h2>

            <p>
            Casa:
            ${personagem.house || "Sem casa"}
            </p>

            <p>
            Ator:
            ${personagem.actor || "Não informado"}
            </p>


        </div>
        `;
        }
        );

        busca.addEventListener("input", () => {

    let texto = busca.value.toLowerCase();


    let filtrados = personagens.filter(personagem => {

        return personagem.name
        .toLowerCase()
        .includes(texto);

    });


    cards.innerHTML = "";


    filtrados
    .slice(0, quantidade)
    .forEach(personagem => {

        cards.innerHTML += `

        <div class="card">

            <img 
            src="${personagem.image || 'img/sem-imagem.png'}"
            >

            <h2>${personagem.name}</h2>

            <p>
            Casa: ${personagem.house || "Sem casa"}
            </p>

        </div>

        `;

    });

});
}

btnMais.addEventListener("click", () => {

    quantidade = 7;

    mostrarPersonagens();

    if (quantidade >= personagens.length) {

        btnMais.style.display = "none";

    }
}

);