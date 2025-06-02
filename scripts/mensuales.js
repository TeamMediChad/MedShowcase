const mensuales = [
    ['c', 'karrablast', 'Jabubuu'],
    ['c', 'escavalier', 'Jabubuu'],
    ['c', 'walrein', 'xDerxx'],
    ['c', 'snubbull', 'UltimoMorador'],
    ['c', 'granbull', 'UltimoMorador'],
    ['c', 'mantyke', 'UltimoMorador'],
    ['c', 'umbreon', 'Jabubuu'],
    ['r', ['lapras','https://media.giphy.com/media/GKVQ6Xdjm9DDDIb63C/giphy.gif'],'MusTam',],
    ['c', 'blitzle', 'Guabixd'],
    ['c', 'zebstrika', 'Guabixd'],
    ['c', 'unfezant', 'UltimoMorador'],
    ['c', 'klang', 'IgnacionCZ'],
    ['c', 'klinklang', 'IgnacionCZ'],
    ['c', 'smoochum', 'UltimoMorador'],
    ['c', 'patrat', 'UltimoMorador'],
    ['r',['corphish','https://img.pokemondb.net/sprites/black-white/anim/shiny/corphish.gif'],'Lirio'],
    ['r',['treecko','https://img.pokemondb.net/sprites/black-white/anim/shiny/treecko.gif'],'Kriber']
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