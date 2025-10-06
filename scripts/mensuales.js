const mensuales = [
    ['c', 'throh', 'Alakxel'],
    ['c', 'plusle', 'DavinchY'],
    ['c', 'drifloon', 'suzuya'],
    ['r', ['porygon-z','https://media.giphy.com/media/1THDLYByT8yEctYNEy/giphy.gif'],'Mexb'],
    ['r', ['squirtle','https://media.giphy.com/media/BgYP6yjR49jBxtKv6m/giphy.gif'],'emirfeNoPremium'],
    ['r', ['ledyba','https://media.giphy.com/media/IMPoMZru2uSVpo0lUU/giphy.gif'],'LauraSkylar'],
    ['r', ['sharpedo','https://img.pokemondb.net/sprites/black-white/anim/shiny/sharpedo.gif'],'KnowJiYong'],
    ['r', ['plusle','https://img.pokemondb.net/sprites/black-white/anim/shiny/plusle.gif'],'DavinchY'],
    ['r', ['scyther','https://img.pokemondb.net/sprites/black-white/anim/shiny/scyther.gif'],'AsuraSkyFlames'],
    ['r', ['slakoth','https://img.pokemondb.net/sprites/black-white/anim/shiny/slakoth.gif'],'DPirlo'],
  ];

function showTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
      });
      document.getElementById('tab-' + tabId).style.display = 'block';
    }

renderMensuales(); 

function renderMensuales() {
    const comunesContainer = document.getElementById('mensuales-dex');
    const rarosContainer = document.getElementById('mensuales-destacados');

    mensuales.forEach(([tipo, gif, entrenador]) => {
        if (tipo == 'c') {
            createShinyCard(tipo, gif, entrenador, comunesContainer);
        } else if (tipo == "r"){
            createShinyCard(tipo, gif, entrenador, rarosContainer);
        }    
    });
}

function createShinyCard(tipo, gif, entrenador, container) {
    const card = document.createElement('div');
    card.className= 'shinycard';

    const img_wrap = document.createElement('div');
    const title = document.createElement('h2');
    img_wrap.className = "shinycard-img-wrapper";
    title.className = 'shinycard-title';
    card.appendChild(img_wrap);

    const img = document.createElement('img');
    if (tipo == 'c') {
        img.src = `https://img.pokemondb.net/sprites/black-white/anim/shiny/${gif}.gif`;
        img.onerror = function () {
            this.src = `../Members_sprites/Placeholder.png`;
        }
        title.textContent = gif;
    } else if (tipo == 'r'){
        img.src = gif[1];
        img.onerror = function () {
            this.src = `../Members_sprites/Placeholder.png`;
        }
        title.textContent = gif[0];
    }
    img.className = 'shinycard-img';
    img_wrap.appendChild(img);
    card.appendChild(title);

    // Crear rol
    const trainer = document.createElement('p');
    trainer.className = 'shinycard-trainer';
    trainer.textContent = entrenador;
    card.appendChild(trainer);

    container.appendChild(card);
}