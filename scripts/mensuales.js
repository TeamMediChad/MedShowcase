const mensuales = [
    ['c', 'dewott', 'Seaba'],
    ['c', 'samurott', 'Seaba'],
    ['c', 'wailord', 'ErnestoSwampert'],
    ['c', 'cranidos', 'OniED'],
    ['c', 'whiscash', 'Palafo'],
    ['c', 'flareon', 'Jabubuu'],
    ['c', 'lillipup', 'UltimoMorador'],
    ['c', 'leafeon', 'Mittoh'],
    ['c', 'ninjask', 'ritosenpai'],
    ['c', 'monferno', 'Akalii'],
    ['c', 'infernape', 'Akalii'],
    ['c', 'kricketot', 'Souen'],
    ['r', ['staryu','https://media.giphy.com/media/zCSh5QHt2WemejGjzh/giphy.gif'],'ErnestoSwampert'],
    ['r', ['wailmer','https://img.pokemondb.net/sprites/black-white/anim/shiny/wailmer.gif'],'ErnestoSwampert'],
    ['r', ['barboach','https://img.pokemondb.net/sprites/black-white/anim/shiny/barboach.gif'],'Rebukittheveil'],
    ['r', ['beldum','https://img.pokemondb.net/sprites/black-white/anim/shiny/beldum.gif'],'Salva'],
    ['r', ['feebas','https://img.pokemondb.net/sprites/black-white/anim/shiny/feebas.gif'],'Salva'],
    ['r', ['luvdisc','https://img.pokemondb.net/sprites/black-white/anim/shiny/luvdisc.gif'],'IxGab'],
    ['r', ['staryu','https://img.pokemondb.net/sprites/black-white/anim/shiny/staryu.gif'],'Azathotx'],
    ['r', ['shroomish','https://img.pokemondb.net/sprites/black-white/anim/shiny/shroomish.gif'],'Azathotx'],
    ['r', ['luvdisc','https://img.pokemondb.net/sprites/black-white/anim/shiny/luvdisc.gif'],'Ferbus'],
    ['r', ['luvdisc','https://img.pokemondb.net/sprites/black-white/anim/shiny/luvdisc.gif'],'Krampus'],
    ['r', ['pidgey', 'https://media.giphy.com/media/wuQKOEVvovxvZElCoZ/giphy.gif'], 'KnowJiYong'],
    ['r', ['pelipper', 'https://media.giphy.com/media/g9HysJkxwY4NjKzrjg/giphy.gif'], 'DilanRM'],
    ['r', ['cranidos', 'https://media.giphy.com/media/Dk1ECUJy7ElgT24Ncu/giphy.gif'], 'OniED'],
    ['r', ['larvesta', 'https://media.giphy.com/media/TMQQ5y9QIz9q0fGe4X/giphy.gif'], 'Doce']
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