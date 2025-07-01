const mensuales = [
    ['c', 'kirlia', 'IxGab'],
    ['c', 'magmortar', 'DiGoMo'],
    ['c', 'sewaddle', 'emirfeNoPremium'],
    ['c', 'slakoth', 'Estorbiito'],
    ['c', 'vigoroth', 'Estorbiito'],
    ['c', 'slaking', 'Estorbiito'],
    ['r', ['slakoth','https://img.pokemondb.net/sprites/black-white/anim/shiny/slakoth.gif'],'Estorbiito',],
    ['c', 'hippopotas', 'aeamanh'],
    ['c', 'hippowdon', 'aeamanh'],
    ['c', 'makuhita', 'UltimoMorador'],
    ['r',['shroomish','https://img.pokemondb.net/sprites/black-white/anim/shiny/shroomish.gif'],'sadending'],
    ['r',['skarmory','https://img.pokemondb.net/sprites/black-white/anim/shiny/skarmory.gif'],'sadending'],
    ['r',['growlithe','https://media.giphy.com/media/vYapmKuh0r9xrREN5K/giphy.gif'],'OniED'],
    ['r',['sentret','https://img.pokemondb.net/sprites/black-white/anim/shiny/sentret.gif'],'Iucifer'],
    ['r',['pansage','https://img.pokemondb.net/sprites/black-white/anim/shiny/pansage.gif'],'OniED'],
    ['r',['eevee','https://media.giphy.com/media/nJZvHOjihRvNqn2v8d/giphy.gif'],'Mittoh'],
    ['r',['shroomish','https://img.pokemondb.net/sprites/black-white/anim/shiny/shroomish.gif'],'nyumicheaelis'],
    ['r',['koffing','https://media.giphy.com/media/bro6Bi85eRrGodIkYs/giphy.gif'],'JuniorJMx'],
    ['r',['absol','https://media.giphy.com/media/85gvugRYucFsnkUNOZ/giphy.gif'],'TheJesucristian'],
    ['r',['larvesta','https://media.giphy.com/media/TMQQ5y9QIz9q0fGe4X/giphy.gif'],'AsuraSkyFlames'],
    ['r',['bulbasaur','https://media.giphy.com/media/WvZW5hIvmF33I0bYDI/giphy.gif'],'JJean'],
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