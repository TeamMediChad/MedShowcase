const mensuales = [
    ['c', 'yanma', 'Souen'],
    ['c', 'yanmega', 'Souen'],
    ['c', 'rampardos', 'OniED'],
    ['c', 'elekid', 'KilluaZoldyck'],
    ['c', 'vespiquen', 'Mittoh'],
    ['r', ['marshtomp','https://img.pokemondb.net/sprites/black-white/anim/shiny/marshtomp.gif'],'aeamanh'],
    ['r', ['glaceon','https://media.giphy.com/media/vwRiopeTCg3wgDpdFN/giphy.gif'],'aeamanh'],
    ['r', ['barboach','https://img.pokemondb.net/sprites/black-white/anim/shiny/barboach.gif'],'aeamanh'],
    ['r', ['wailmer','https://img.pokemondb.net/sprites/black-white/anim/shiny/wailmer.gif'],'aeamanh'],
    ['r', ['corphish','https://img.pokemondb.net/sprites/black-white/anim/shiny/corphish.gif'],'aeamanh'],
    ['r', ['combee','https://img.pokemondb.net/sprites/black-white/anim/shiny/combee.gif'],'Mittoh'],
    ['r', ['corsola','https://img.pokemondb.net/sprites/black-white/anim/shiny/corsola.gif'],'Mittoh'],
    ['r', ['shellder','https://img.pokemondb.net/sprites/black-white/anim/shiny/shellder.gif'],'Mittoh'],
    ['r', ['corphish','https://img.pokemondb.net/sprites/black-white/anim/shiny/corphish.gif'],'JJean'],
    ['r', ['sudowoodo','https://img.pokemondb.net/sprites/black-white/anim/shiny/sudowoodo.gif'],'Rebukittheveil'],
    ['r', ['luvdisc','https://img.pokemondb.net/sprites/black-white/anim/shiny/luvdisc.gif'],'fcmfrannarf'],
    ['r', ['yanma','https://img.pokemondb.net/sprites/black-white/anim/shiny/yanma.gif'],'Souen'],
    ['r', ['krabby','https://img.pokemondb.net/sprites/black-white/anim/shiny/krabby.gif'],'Dohrito'],
    ['r', ['remoraid','https://img.pokemondb.net/sprites/black-white/anim/shiny/remoraid.gif'],'Ferbus'],
    ['r', ['treecko','https://img.pokemondb.net/sprites/black-white/anim/shiny/treecko.gif'],'Ingrid'],
    ['r', ['kecleon','https://img.pokemondb.net/sprites/black-white/anim/shiny/kecleon.gif'],'ritosenpai'],
    ['r', ['rattata','https://media.giphy.com/media/Vjw1bzyqNhUtyhM6bb/giphy.gif'],'Mustam'],
    ['r', ['marill','https://media.giphy.com/media/OERQirXGLpigGCAl2p/giphy.gif'],'Lujeor'],
    ['r', ['whismur','https://media.giphy.com/media/ISSi5NgbdVWg0yjwXo/giphy.gif'],'JJean'],
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