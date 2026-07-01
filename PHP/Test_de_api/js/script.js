
const btnCarregar = document.getElementById("btnCarregar");

btnCarregar.addEventListener("click", carregarPokedex);

async function carregarPokedex() {

    const container = document.getElementById("pokedexContainer");
    container.innerHTML = "Carregando...";

    try {

        const res = await fetch("http://localhost/APIPOKEMON/Pokemon/listar.php");
        const pokemons = await res.json();

        container.innerHTML = "";

        pokemons.forEach(pokemon => {

            const card = document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
                <img src="${pokemon.imagem}" alt="${pokemon.nome}">
                <h3>${pokemon.nome}</h3>
                <p>Tipo: ${pokemon.tipo}</p>
                <p>Nível: ${pokemon.nivel}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {

        document.getElementById("infoSistema").innerHTML =
            "Erro ao carregar a Pokédex.";
    }
}