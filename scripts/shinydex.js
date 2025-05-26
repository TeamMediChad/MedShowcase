function getSpriteURL(name, index) {
    return `https://img.pokemondb.net/sprites/black-white/anim/shiny/${name}.gif`;
}

const mainContent = document.getElementById("main-content");

let globalIndex = 0;

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
if (lockedCaptured.includes(name)) {
    container.classList.add("captured");
    container.style.pointerEvents = "auto";

    const registrador = capturedBy[name] || "Desconocido";
    const tooltip = document.createElement("div");
    tooltip.className = "shinydex-tooltip";


    if (userSprites[registrador]) {
        const userImg = document.createElement("img");
        userImg.src = userSprites[registrador];
        userImg.alt = registrador;
        userImg.style.width = "100px";
        userImg.style.height = "100px";
        userImg.style.display = "block";
        userImg.style.margin = "0 auto 4px auto";
        tooltip.appendChild(userImg);
    }


    const text = document.createElement("div");
    text.textContent = `Registrado por: ${registrador}`;
    tooltip.appendChild(text);

    container.appendChild(tooltip);
}

    const imgWrapper = document.createElement("div");
    imgWrapper.className = "shinydex-wraper";

    const img = document.createElement("img");
    img.src = getSpriteURL(name, globalIndex);
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
