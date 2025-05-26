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