const pokedex = document.getElementById("pokedex");

let html = "";

Object.entries(generations).forEach(([generation, pokemons]) => {

    let contenedor

    html += `<h2>${generation}</h2>`;

    pokemons.forEach(pokemon => {
        if (Object.keys(capturedBy).includes(pokemon)){
            contenedor = "contenedor"
        }
        else{
            contenedor = "contenedor2"
        }

        const nombre = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);

        html += `
        <div class="wrapper">
            <img src="https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/${pokemon}.png" class="icono">
            <div class="${contenedor}">
                <span class="nombre">${nombre}</span>
            </div>
        </div>
        `;

    });

});

pokedex.innerHTML = html;
