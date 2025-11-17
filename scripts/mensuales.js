const mensuales = [
    ['c', 'kangaskhan', 'must'],
    ['c', 'aipom', 'ToddGold'],
    ['c', 'ambipom', 'ToddGold'],
    ['c', 'cherubi', 'Dohrito'],
    ['c', 'anorith', 'YankiX '],
    ['c', 'armaldo', 'YankiX '],
    ['c', 'lileep', 'OniED'],
    ['r', ['farfetchd','https://img.pokemondb.net/sprites/black-white/anim/shiny/farfetchd.gif'],'Ferbus '],
    ['r', ['porygon','https://media.giphy.com/media/ftjqkIy4bwVfyn46q5/giphy.gif'],'Seaba '],
    ['r', ['quilava','https://media.giphy.com/media/5GgLC5K1wfNlCyL4Su/giphy.gif'],'Doce '],
    ['r', ['koffing','https://media.giphy.com/media/bro6Bi85eRrGodIkYs/giphy.gif'],'Jabubuu '],
    ['r', ['aipom','https://img.pokemondb.net/sprites/black-white/anim/shiny/aipom.gif'],'ToddGold '],
    ['r', ['kangaskhan','https://media.giphy.com/media/OW6mw4vYknp3jz4gwb/giphy.gif'],'Mustam '],
    ['r', ['feebas','https://img.pokemondb.net/sprites/black-white/anim/shiny/feebas.gif'],'EscavalierMMO '],
    ['r', ['porygon','https://media.giphy.com/media/2jI8Fg5v3U8E23x8xH/giphy.gif'],'wallycbammo  '],
    ['r', ['anorith','https://media.giphy.com/media/iqMNI5FbyiBKHNr90h/giphy.gif'],'YankiX  '],
    ['r', ['lileep','https://media.giphy.com/media/fWQRRbEqznFdIf8xCL/giphy.gif'],'OniED  '],
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