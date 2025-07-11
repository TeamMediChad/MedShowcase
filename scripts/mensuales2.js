const mensuales = [
    ['c', 'yamask', 'JUANKAXGARCIA'],
    ['c', 'gallade', 'Mexb'],
    ['c', 'shedinja', 'wallycbammo'],
    ['r', ['staryu','https://img.pokemondb.net/sprites/black-white/anim/shiny/staryu.gif'],'Mexb'],
    ['r', ['roselia','https://media.giphy.com/media/oRnsLHK2wKMqpMcC5z/giphy.gif'],'Mexb'],
    ['r', ['gulpin','https://media.giphy.com/media/dMqaWGfSPgBwKmrZqZ/giphy.gif'],'Ixgab'],
    ['r', ['whismur','https://media.giphy.com/media/ISSi5NgbdVWg0yjwXo/giphy.gif'],'Renz'],
    ['r', ['shedinja','https://img.pokemondb.net/sprites/black-white/anim/shiny/shedinja.gif'],'wallycbammo'],
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