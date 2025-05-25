const background = document.querySelector('.background');

function blockScrollWheel(e) {
  e.preventDefault();
}
function blockScrollKey(e) {
  const keys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' '];
  if (keys.includes(e.key)) {
    e.preventDefault();
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
  medalla_container.innerHTML = '';
  shiny_container.innerHTML = '';
  shiny_container2.innerHTML = '';
  shiny_container3.innerHTML = '';

  // sort
  const miembro = memberData[personKey] || [];
  if (!miembro) return;

  const medallas = miembro.medallas || [];
  const shinys = miembro.shinys || [];
  const destacados = miembro.destacados || [];
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

  // destacados
  destacados.forEach(id => {
    const destacadosEl = document.createElement('img');
    destacadosEl.src = `${id}`;
    shiny_container2.appendChild(destacadosEl);
    
  });

  vendidos.forEach(id => {
    const vendidosEl = document.createElement('img');
    vendidosEl.src = `${id}`;
    shiny_container3.appendChild(vendidosEl);
    
  });

  member_img_modal = document.getElementById('member-img-modal');
  member_img_modal.src = `../Members_sprites/${miembro.name}.png`;
  member_img_modal.onerror = function () {
    this.src = `../Members_sprites/Placeholder.png`;
  }

  modal_name = document.getElementById('modal-name');
  modal_name.textContent = miembro.name;

  document.getElementById('modal-title2').textContent = `Shinys (${shinys.length + destacados.length})`;

  document.getElementById('shiny-container2').classList.add("hidden");
  document.getElementById('shiny-container').classList.add("hidden");
  document.getElementById('shiny-container3').classList.add("hidden");
  document.getElementById('shiny-btn').style.backgroundColor = '#838383';
  document.getElementById('sell-btn').style.backgroundColor = '#ef4444';
  document.getElementById('shiny-container2').classList.remove("hidden");
  document.getElementById('shiny-container').classList.remove("hidden");

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
if (!modalContent.contains(e.target)) {
  closeModal();
}
});

function show_shiny() {
  if(document.getElementById('shiny-container').classList[1] == 'hidden'){
    document.getElementById('shiny-container3').classList.add("hidden");
    document.getElementById('shiny-container2').classList.remove("hidden");
    document.getElementById('shiny-container').classList.remove("hidden");
    document.getElementById('shiny-btn').style.backgroundColor = '#838383';
    document.getElementById('sell-btn').style.backgroundColor = '#ef4444';
    document.getElementById('modal-title2').textContent = `Shinys (${document.getElementById('shiny-container').children.length + document.getElementById('shiny-container2').children.length})`;
  }
}

function show_sell() {
  if(document.getElementById('shiny-container3').classList[1] == 'hidden'){
    document.getElementById('shiny-container').classList.add("hidden");
    document.getElementById('shiny-container2').classList.add("hidden");
    document.getElementById('shiny-container3').classList.remove("hidden");
    document.getElementById('shiny-btn').style.backgroundColor = '#ef4444';
    document.getElementById('sell-btn').style.backgroundColor = '#838383';
    document.getElementById('modal-title2').textContent = `Vendidos (${document.getElementById('shiny-container3').children.length})`;
  }
}