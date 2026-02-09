const pokedex = document.getElementById("pokedex");

let html = "";

Object.entries(generations).forEach(([generation, pokemons]) => {

    let contenedor

    html += `<h2>${generation}</h2>`;

    pokemons.forEach(pokemon => {
        if (Object.keys(capturedBy).includes(pokemon)){
            if (Object.keys(memberData).includes(capturedBy[pokemon][0])){
                contenedor = "contenedor"
            }
            else{
                contenedor = "contenedor2"
            }
        }
        else{
            contenedor = "contenedor_empty"
        }

        const nombre = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);

        html += `
        <div class="wrapper" id="${pokemon}-wrapper">
            <img src="https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/${pokemon}.png" class="icono">
            <div class="${contenedor}">
                <span class="nombre">${nombre}</span>
            </div>
        </div>
        `;

    });

});

pokedex.innerHTML = html;

const infoImg = document.getElementById("pokedex-info-img");
const infoname = document.getElementById("pokedex-info-name");
const infocatcher = document.getElementById("pokedex-info-catcher");
const infooriginal = document.getElementById("pokedex-info-original");

document.querySelectorAll(".wrapper").forEach(wrapper => {

    wrapper.addEventListener("click", () => {

        const pokemon = wrapper.id.replace("-wrapper", "");

        infoImg.src = `https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/${pokemon}.png`;
        infoname.textContent = `${pokemon}`
        infocatcher.textContent = `${capturedBy[pokemon][0]}`
        infooriginal.textContent = `${capturedBy[pokemon][1]}`
    });

});
