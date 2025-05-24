const mensuales = [
    ['c', 'trubbish', 'LauraSkylar'],
    ['c', 'rapidash', 'JCancelo'],
    ['c', 'shelmet', 'Seaba'],
    ['c', 'karrablast', 'Jabubuu'],
    ['c', 'roselia', 'Ajierro'],
    ['c', 'bronzong', 'SniperioYt'],
    ['c', 'koffing', 'Sounex'],
    ['c', 'darumaka', 'LiXriio'],
    ['c', 'shuppet', 'Sniperio'],
    ['c', 'magikarp', 'JCancelo'],
    ['c', 'graveler', 'ToxicPlumber'],
    ['c', 'deerling', 'Jabubuu'],
    ['c', 'magikarp', 'Yostiin'],
    ['c', 'magikarp', 'JCancelo'],
    ['c', 'purrloin', 'MixZeppeli'],
    ['c', 'smeargle', 'AguitaGooddUwU'],
    ['c', 'graveler', 'UltimoMorador'],
    ['c', 'gabite', 'ritosenpai'],
    ['c', 'durant', 'SucramKanto'],
    ['c', 'nidorino', 'DavinchY'],
    ['c', 'psyduck', 'Ajierro'],
    ['c', 'gloom', 'Jabubuu'],
    ['c', 'electabuzz', 'callmydaddy'],
    ['c', 'nidoran-f', 'Mxxarc'],
    ['c', 'ariados', 'Jabubuu'],
    ['c', 'bronzong', 'SucramKanto'],
    ['c', 'hariyama', 'UltimoMorador'],
    ['c', 'snubbull', 'UltimoMorador'],
    ['c', 'wingull', 'CeceMerdosa'],
    ['c', 'mantine', 'UltimoMorador'],
    ['c', 'magikarp', 'JCancelo'],
    ['c', 'rapidash', 'IgnacioCZ'],
    ['c', 'tentacruel', 'Souenx'],
    ['c', 'gothorita', 'callmydaddy'],
    ['c', 'magmar', 'CeceMerdosa'],
    ['c', 'parasect', 'AguitaGooddUwU'],
    ['c', 'ditto', 'Souenx'],
    ['c', 'golbat', 'TheJesucristian'],
    ['c', 'rapidash', 'XIPANDAIX'],
    ['c', 'clamperl', 'UltimoMorador'],
    ['c', 'ditto', 'MarkosW'],
    ['c', 'deerling', 'CeceMerdosa'],
    ['r', ['lapras','https://media.giphy.com/media/GKVQ6Xdjm9DDDIb63C/giphy.gif'],'MusTam',],
    ['c', 'rapidash', 'MasterSainz'],
    ['c', 'bibarel', 'Moonlyze'],
    ['c', 'ditto', 'Estorbiito'],
    ['c', 'blitzle', 'Guabixd'],
    ['c', 'krokorok', 'ChrisZing'],
    ['c', 'venipede', 'xXPandaMMO'],
    ['c', 'litwick', 'JCancelo'],
    ['c', 'koffing', 'Sentiel'],
    ['c', 'petilil', 'Seaba'],
    ['c', 'venipede', 'DavinchY'],
    ['c', 'golett', 'CeceMerdosa'],
    ['c', 'golett', 'AshbellUwU'],
    ['c', 'whismur', 'Moonlyze'],
    ['c', 'swadloon', 'LiXiio'],
    ['c', 'bibarel', 'Moonlyze'],
    ['c', 'litwick', 'xXPandaMMO'],
    ['c', 'wingull', 'Seaba'],
    ['c', 'surskit', 'ritosenpai'],
    ['c', 'marill', 'UltimoMorador'],
    ['c', 'smeargle', 'JosiasMccartney'],
    ['c', 'rhydon', 'emirfeNoPremium'],
    ['c', 'weepinbell', 'Jabubuu'],
    ['c', 'bibarel', 'RagnarokBs'],
    ['c', 'graveler', 'Jabubuu'],
    ['c', 'beedrill', 'AsuraSkyFlames'],
    ['c', 'bibarel', 'Guabixd'],
    ['c', 'boldore', 'UltimoMorador'],
    ['c', 'scraggy', 'UltimoMorador'],
    ['c', 'golett', 'Luciferovo'],
    ['c', 'tranquill', 'UltimoMorador']
  ];

function showTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
      });
      document.getElementById('tab-' + tabId).style.display = 'block';
    }

renderMensuales(); 

function renderMensuales() {
    const comunesContainer = document.getElementById('mensuales-comunes');
    const rarosContainer = document.getElementById('mensuales-raros');

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