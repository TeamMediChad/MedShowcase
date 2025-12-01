const mensuales = [
    ['c', 'cradily', 'OniED'],
    ['c', 'tropius', 'Scashh'],
    ['c', 'drilbur', 'MonkeyCake'],
    ['c', 'excadrill', 'MonkeyCake'],
    ['r', ['cubone','https://media.giphy.com/media/C3gmsf8A7LfrKzpGDY/giphy.gif'],'AdrixJK'],
    ['r', ['hoothoot','https://media.giphy.com/media/wrvpm9RfzVS6NrghQO/giphy.gif'],'CXRLITUS'],
    ['r', ['misdreavus','https://media.giphy.com/media/4UZxfBHHPVtzNGkt2o/giphy.gif'],'IxGab'],
    ['r', ['eevee','https://media.giphy.com/media/nJZvHOjihRvNqn2v8d/giphy.gif'],'Doce'],
    ['r', ['drowzee','https://media.giphy.com/media/l7u1smgtUnfhkmO2dv/giphy.gif'],'HoraxPC'],
    ['r', ['mudkip','https://media.giphy.com/media/tbC1NEwy3G4QZ3ng7t/giphy.gif'],'Scashh'],
    ['r', ['drilbur','https://media.giphy.com/media/75dF5sbB1cId5DxiXN/giphy.gif'],'MonkeyCake'],
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