const background = document.querySelector('.background');

screenWidth = screen.width;
screenHeight = screen.height;


//const screenWidth = 1280;
//const screenHeight = 1024;

//console.log(`Resolución total: ${screenWidth}x${screenHeight}`);
//console.log(`Resolución modal: ${Math.ceil(screenWidth*0.6)}x${Math.floor(screenHeight*0.6)}`);

function blockScrollWheel(e) {
  e.preventDefault();
}
function blockScrollKey(e) {
  const keys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' '];
  if (keys.includes(e.key)) {
    e.preventDefault();
  }
}


function resolution(isPortrait){
  const modal_content = document.getElementById('modal-content');
  modal_content.style.height = `${Math.floor(screenHeight*0.6)}px`;

  const modal1 = document.getElementById('modal1');
  modal1.style.height = `${Math.floor((modal_content.style.height)*0.78)}px`;

  const modal2 = document.getElementById('modal2');
  modal2.style.height = `${Math.floor((modal_content.style.height)*0.22)}px`;

  const modal3 = document.getElementById('modal3');

  modal3.style.height = `${Math.floor((modal_content.style.height)*0.78)}px`;

  const modal4 = document.getElementById('modal4');
  modal4.style.height = `${Math.floor((modal_content.style.height)*0.22)}px`;

  if(isPortrait){

    modal_content.style.width = '95vw';
    modal1.style.width = '35vw';
    modal2.style.width = '35vw';
    modal3.style.width = '60vw';
    modal4.style.width = '60vw';
  } else {

    modal_content.style.width = `${Math.ceil(screenWidth*0.6)}px`;
    modal1.style.width = `${Math.ceil((modal_content.style.width - 100)*0.35)}px`;
    modal2.style.width = `${Math.ceil((modal_content.style.width - 100)*0.35)}px`;
    modal3.style.width = `${Math.ceil((modal_content.style.width - 100)*0.65)}px`;
    modal4.style.width = `${Math.ceil((modal_content.style.width - 100)*0.65)}px`;
  }
  
}

function disableScroll() {
  background.addEventListener('wheel', blockScrollWheel, { passive: false });
  background.addEventListener('touchmove', blockScrollWheel, { passive: false });
  document.addEventListener('keydown', blockScrollKey, { passive: false });
  background.style.overflowY = 'auto';
}

function enableScroll() {
  background.removeEventListener('wheel', blockScrollWheel);
  background.removeEventListener('touchmove', blockScrollWheel);
  document.removeEventListener('keydown', blockScrollKey);
  background.style.overflowY = 'auto';
}

function showInfo(personKey) {
  //disableScroll()
  const medalla_container = document.getElementById('medalla-container');
  const shiny_container = document.getElementById('shiny-container');
  const shiny_container2 = document.getElementById('shiny-container2');
  const shiny_container3 = document.getElementById('shiny-container3');
  const shiny_container4 = document.getElementById('shiny-container4');
  medalla_container.innerHTML = '';
  shiny_container.innerHTML = '';
  shiny_container2.innerHTML = '';
  shiny_container3.innerHTML = '';
  shiny_container4.innerHTML = '';

  // sort
  const miembro = memberData[personKey] || [];
  if (!miembro) return;

  const medallas = miembro.medallas || [];
  const shinys = miembro.shinys || [];
  const destacados = miembro.destacados || [];
  const perdidos = miembro.perdidos || [];
  const vendidos = miembro.vendidos || [];

  // medallas
  medallas.forEach(id => {
    const infoMedalla = listaMedalla[id];
    if (!infoMedalla) return;

    const tooltipWrapper = document.createElement('span');
    tooltipWrapper.className = 'tooltip';

    const medallaEl = document.createElement('span');
    medallaEl.className = 'medalla';
    medallaEl.textContent = infoMedalla.name;

    const tooltip = document.createElement('span');
    tooltip.className = 'tooltiptext';
    tooltip.textContent = infoMedalla.info;

    tooltipWrapper.appendChild(medallaEl);
    tooltipWrapper.appendChild(tooltip);

    medalla_container.appendChild(tooltipWrapper);
    
  });

  // shinys
  shinys.forEach(id => {
    const shinyEL = document.createElement('img');
    shinyEL.src = `https://img.pokemondb.net/sprites/black-white/anim/shiny/${id}.gif`;
    shinyEL.className = "shiny-img"
    shiny_container.appendChild(shinyEL);
  });

  const espacio1 = document.getElementById('espacio1');
  if (destacados.length == 0){
    espacio1.style = "height: 0rem;";
  } else {
    espacio1.style = "height: 1rem;";
  }

  // destacados
  destacados.forEach(id => {
    const destacadosEl = document.createElement('img');
    destacadosEl.src = `${id}`;
    shiny_container2.appendChild(destacadosEl);
  });

  if(shinys.length == 0 && destacados.length == 0 && perdidos.length == 0){
    const shinyEL = document.createElement('span');
    shiny_container2.className = "shiny-img-container-false";
    shiny_container4.className = "shiny-img-container-false";
    shinyEL.className = "medalla2";
    if(miembro.medallas.includes('b32')){
      shinyEL.textContent = '☠️ Persona mega pecadora';
    } else if (miembro.medallas.includes('b24')){
      shinyEL.textContent = '👿 Persona pecadora';
    } else {
      shinyEL.textContent = '😢 No shiny todavía';
    }
    shiny_container2.appendChild(shinyEL);
  } else {
    shiny_container2.className = "shiny-img-container";
    shiny_container4.className = "shiny-img-container";
  }
  
  const espacio2 = document.getElementById('espacio2');
  if (perdidos.length == 0){
    espacio2.style = "height: 0rem;";
  } else {
    espacio2.style = "height: 2rem;";
  }

  // perdidos
  perdidos.forEach(id => {
    const perdidosEl = document.createElement('img');
    perdidosEl.src = `${id}`;
    shiny_container4.appendChild(perdidosEl);
  });

  //vendidos
  vendidos.forEach(id => {
    const vendidosEl = document.createElement('img');
    vendidosEl.src = `${id}`;
    shiny_container3.appendChild(vendidosEl);
    
  });

  if(vendidos.length == 0){
    const vendidosEl = document.createElement('span');
    shiny_container3.className = "shiny-img-container-false";
    vendidosEl.className = "medalla2";
    if(miembro.medallas.includes('b32')){
      vendidosEl.textContent = '☠️ No quieres saber';
    } else if(miembro.name == 'LiXriio'){
      vendidosEl.textContent = '🏳️‍🌈 Otro tipo de pecador';
    } else if (miembro.medallas.includes('b24')){
      vendidosEl.textContent = '👿 Pecador no confesado';
    } else {
      vendidosEl.textContent = '😇 Persona limpia de pecado';
    }
    shiny_container3.appendChild(vendidosEl);
  } else { shiny_container3.className = "shiny-img-container";}

  member_img_modal = document.getElementById('member-img-modal');
  member_img_modal.src = `../Members_sprites/${miembro.name}.png`;
  member_img_modal.onerror = function () {
    this.src = `../Members_sprites/Placeholder.png`;
  }

  //resolución
  resolution(screenHeight > screenWidth);

  modal_name = document.getElementById('modal-name');
  modal_name.textContent = miembro.name;

  document.getElementById('modal-title2').textContent = `Shinys (${shinys.length + destacados.length})`;

  document.getElementById('shiny-container2').classList.add("hidden");
  document.getElementById('shiny-container').classList.add("hidden");
  document.getElementById('shiny-container3').classList.add("hidden");
  document.getElementById('shiny-container4').classList.add("hidden");
  document.getElementById('shiny-btn').style.backgroundColor = '#838383';
  document.getElementById('sell-btn').style.backgroundColor = '#ef4444';
  document.getElementById('shiny-container2').classList.remove("hidden");
  document.getElementById('shiny-container').classList.remove("hidden");
  document.getElementById('shiny-container4').classList.remove("hidden");

  document.getElementById('modal').style.opacity = 100;
  document.getElementById('modal').style.visibility = 'visible';
}

function closeModal() {
  //enableScroll()
  document.getElementById('modal').style.opacity = 0;
  document.getElementById('modal').style.visibility = 'hidden';
}

document.getElementById('modal').addEventListener('click', function (e) {
const modalContent = document.querySelector('.modal-content');
const iconbar = document.querySelector('.icon-container');
if (!modalContent.contains(e.target) && !iconbar.contains(e.target)) {
  closeModal();
}
});

function show_shiny() {
  const nombre = document.getElementById('modal-name').textContent;
  if(document.getElementById('shiny-container').classList[1] == 'hidden'){
    document.getElementById('shiny-container3').classList.add("hidden");
    document.getElementById('shiny-container2').classList.remove("hidden");
    document.getElementById('shiny-container').classList.remove("hidden");
    document.getElementById('shiny-container4').classList.remove("hidden");
    document.getElementById('shiny-btn').style.backgroundColor = '#838383';
    document.getElementById('sell-btn').style.backgroundColor = '#ef4444';
    const espacio2 = document.getElementById('espacio2');
    if (memberData[nombre].perdidos.length == 0){
      espacio2.style = "height: 0rem;";
    } else {
      espacio2.style = "height: 2rem;";
    }
      document.getElementById('modal-title2').textContent = `Shinys (${memberData[nombre].shinys.length + memberData[nombre].destacados.length})`;
  }
}

function show_sell() {
  const nombre = document.getElementById('modal-name').textContent;
  if(document.getElementById('shiny-container3').classList[1] == 'hidden'){
    document.getElementById('shiny-container').classList.add("hidden");
    document.getElementById('shiny-container2').classList.add("hidden");
    document.getElementById('shiny-container4').classList.add("hidden");
    document.getElementById('shiny-container3').classList.remove("hidden");
    document.getElementById('shiny-btn').style.backgroundColor = '#ef4444';
    document.getElementById('sell-btn').style.backgroundColor = '#838383';
    document.getElementById('espacio2').style = "height: 0rem;";
    if(!memberData[nombre].medallas.includes('b32')){
      document.getElementById('modal-title2').textContent = `Vendidos (${memberData[nombre].vendidos.length})`;
    } else {
      document.getElementById('modal-title2').textContent = `Vendidos (Infinitos)`;
    }
    
  }
}



function verificarOrientacion() {
  screenWidth = screen.width;
  screenHeight = screen.height;
  resolution(screenHeight > screenWidth);
  
}

// Ejecutar al cargar
verificarOrientacion();

window.addEventListener('orientationchange', verificarOrientacion);