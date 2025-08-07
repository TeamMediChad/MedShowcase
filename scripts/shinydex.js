function getSpriteURL(name) {
    return `https://img.pokemondb.net/sprites/black-white/anim/shiny/${name}.gif`;
}

function create_shinydex(genName,pokemonList,shinydex,captured){
    const generationlist = pokemonList.filter(name => captured.hasOwnProperty(name)).length;
    const title = document.createElement("div");

    if(shinydex.id == "otherdex"){
        title.className = "otherdex-title";
    }else{
        title.className = "generation-title";
    }

    title.innerHTML = `${genName}&emsp;(${generationlist}/${pokemonList.length})`;
    shinydex.appendChild(title);

    /*
    generation_progress = document.createElement("progress")
    generation_progress.value = generationlist;
    generation_progress.max = pokemonList.length;

    title.appendChild(generation_progress)
    */

    const grid = document.createElement("div");

    if(shinydex.id == "otherdex"){
        grid.className = "grid-container-otherdex";
    }else if(shinydex.id == "unowndex"){
        grid.className = "grid-container-unowndex";
    }else{
        grid.className = "grid-container";
    }

    pokemonList.forEach((name) => {
        

        const container = document.createElement("div");
        if(shinydex.id == "otherdex"){
            container.className = "otherdex-card";
        }else{
            container.className = "shinydex-card";
        }

        let registrador = "";
        if (Object.keys(captured).includes(name)) {

            if(shinydex.id == "shinydex-live"){
                if(Object.keys(memberData).includes(captured[name][0])){
                    container.classList.add("captured");
                }else{
                    container.classList.add("owned");
                }
                registrador = captured[name][0] || "Desconocido";

            } else {
                if(Object.keys(memberData).includes(captured[name][1])){
                    container.classList.add("captured");
                }else{
                    container.classList.add("owned");
                }
                registrador = captured[name][1] || "Desconocido";
            }
            
            container.style.pointerEvents = "auto";
            
            
            
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
    });

    shinydex.appendChild(grid);
}

const shinydex_live = document.getElementById("shinydex-live");
const shinydex_story = document.getElementById("shinydex-story");
const unowndex_list = document.getElementById("unowndex");
const otherdex_list = document.getElementById("otherdex");
// Maestro apóstol
const topContainer = document.createElement("div");
topContainer.className = "top-capturer";

const topImg = document.createElement("img");
topImg.src = `../Members_sprites/${topData.trainer}.png`;
topImg.className = "user-img";
topImg.onerror = () => {
    topImg.remove();
};
const topText = document.createElement("div");
topText.textContent = `🎉 El que mas ha registrado en la Shinydex es ${topData.trainer} con ${topData.count} Pokemon.`;
topText.className = 'small-text-top';

const img_wrap = document.createElement('div');
const toptop = document.createElement('div');
toptop.className = "top-wrap";
img_wrap.className = "user-img-wrapper";
img_wrap.appendChild(topImg);
topContainer.appendChild(img_wrap);
topContainer.appendChild(topText);
toptop.appendChild(topContainer);
document.getElementById('top-trainer').appendChild(toptop);



document.getElementById('Shinydex-header').textContent = `MeD Shinydex (${Object.keys(capturedBy).length + 1}/604)`;
//document.getElementById('Shinydex-progress').value = Object.keys(captured).length + 1;


//shinydex cards
for (const [genName, pokemonList] of Object.entries(generations)) {
    create_shinydex(genName, pokemonList, shinydex_live, capturedBy);
    create_shinydex(genName, pokemonList, shinydex_story, capturedBy);
    shinydex_story.classList.add("hidden");
}

for (const [typename, pokemonList] of Object.entries(otherdex)) {
    create_shinydex(typename, pokemonList, otherdex_list, captured_other);
}

for (const [unownname, pokemonList] of Object.entries(unowndex)) {
    create_shinydex(unownname, pokemonList, unowndex_list, captured_unown);
}

function chage_dex() {
    return `https://img.pokemondb.net/sprites/black-white/anim/shiny/${name}.gif`;
}

const toggle = document.getElementById('live-dex-toggle');

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.getElementById('shinydex-live').classList.remove('hidden');
        document.getElementById('shinydex-story').classList.add('hidden');
        document.getElementById('text-dex').innerHTML = `La <span class="text-red-500">Live <span class="text-white">Shinydex muestre el primer miembro actual en registrar el shiny <br> en caso de no haber miembro actual encontes muestra la primera persona en registrarlo`;
    } else {
        document.getElementById('shinydex-live').classList.add('hidden');
        document.getElementById('shinydex-story').classList.remove('hidden');
        document.getElementById('text-dex').innerHTML = `La Shinydex muestra la primera persona en registrar el shiny`;

    }
  });

function open_shinydex(){
    document.getElementById('shinydex-content').hidden = false;
    document.getElementById('otherdex-content').hidden = true;
    document.getElementById('shinydex-button').disabled = true;
    document.getElementById('otherdex-button').disabled = false;
}

function open_otherdex(){
    document.getElementById('shinydex-content').hidden = true;
    document.getElementById('otherdex-content').hidden = false;
    document.getElementById('shinydex-button').disabled = false;
    document.getElementById('otherdex-button').disabled = true;
}