function getSpriteURL(name) {
    return `https://img.pokemondb.net/sprites/black-white/anim/shiny/${name}.gif`;
}


const mainContent = document.getElementById("main-content");

// Maestro apóstol
const topContainer = document.createElement("div");
topContainer.className = "top-capturer";

const topImg = document.createElement("img");
topImg.src = `../Members_sprites/${topData.trainer}.png`;
topImg.alt = topData.trainer;
topImg.className = "user-img";
topImg.onerror = () => {
    topImg.remove();
};
const topText = document.createElement("div");
topText.textContent = `🎉 El que más ha registrado en la Shinydex es ${topData.trainer} con ${topData.count} Pokémon.`;

const img_wrap = document.createElement('div');
img_wrap.className = "user-img-wrapper";
img_wrap.appendChild(topImg);
topContainer.appendChild(img_wrap);
topContainer.appendChild(topText);
mainContent.appendChild(topContainer);

let globalIndex = 0;

document.getElementById('Shinydex-header').textContent = `MeD Shinydex (${Object.keys(capturedBy).length + 1}/604)`;


//shinydex cards
for (const [genName, pokemonList] of Object.entries(generations)) {
    const title = document.createElement("div");
    title.className = "generation-title";
    title.textContent = genName;
    mainContent.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "grid-container";

    pokemonList.forEach((name) => {
        const container = document.createElement("div");
        container.className = "shinydex-card";

    if (Object.keys(capturedBy).includes(name)) {
        container.classList.add("captured");
        container.style.pointerEvents = "auto";
        
        const registrador = capturedBy[name] || "Desconocido";
        
        const tooltip = document.createElement("div");
        tooltip.className = "shinydex-tooltip";

        const img_wrap = document.createElement('div');
        img_wrap.className = "user-img-wrapper";

        exist = true;
        const userImg = document.createElement("img");
        userImg.src = `../Members_sprites/${registrador}.png`;
        userImg.alt = registrador;
        userImg.onerror = () => {
            exist = false;
            userImg.innerHTML = '';
            userImg.remove();
        };
        if(!exist){
            img_wrap.innerHTML = '';
            img_wrap.remove();
        } else {
            userImg.className = "user-img";
            img_wrap.appendChild(userImg);
            tooltip.appendChild(img_wrap);
        }

        const text = document.createElement("div");
        text.textContent = `Registrado por: ${registrador}`;
        tooltip.appendChild(text);

        container.appendChild(tooltip);
    }

    const imgWrapper = document.createElement("div");
    imgWrapper.className = "shinydex-wraper";

    const img = document.createElement("img");
    img.src = getSpriteURL(name);
    img.className = "shinydex-img";
    img.alt = `Shiny ${name}`;

    img.onerror = () => {
        img.src = 'https://img.pokemondb.net/sprites/black-white/anim/shiny/missingno.gif';
        img.alt = 'Imagen no disponible';
    };

    imgWrapper.appendChild(img);
    

    const label = document.createElement("div");
    label.className = "shinydex-name";
    label.textContent = name;

    container.appendChild(imgWrapper);
    container.appendChild(label);
    grid.appendChild(container);
    globalIndex++;
    });

    mainContent.appendChild(grid);
}
