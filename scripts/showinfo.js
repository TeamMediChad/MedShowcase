const background = document.querySelector('.background');

screenWidth = screen.width;
screenHeight = screen.height;



//const screenWidth = 1280;
//const screenHeight = 1024;

//console.log(`Resolución total: ${screenWidth}x${screenHeight}`);
//console.log(`Resolución modal: ${Math.ceil(screenWidth*0.6)}x${Math.floor(screenHeight*0.6)}`);
// ---------- bloqueo de scroll robusto ----------
let __savedScroll = 0;
let __savedBodyPaddingRight = '';
let __isScrollDisabled = false;

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function disableScroll() {
  if (__isScrollDisabled) return;
  __isScrollDisabled = true;

  __savedScroll = window.scrollY || window.pageYOffset;
  __savedBodyPaddingRight = document.body.style.paddingRight || '';

  const sbw = getScrollbarWidth();
  if (sbw > 0) {
    document.body.style.paddingRight = `${sbw}px`;
  }

  document.body.style.position = 'fixed';
  document.body.style.top = `-${__savedScroll}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';

  // evitar scroll en html también como refuerzo
  document.documentElement.style.overflow = 'hidden';
  console.log('disableScroll(): scrollY=', __savedScroll, 'sbw=', getScrollbarWidth());
}

function enableScroll() {
  if (!__isScrollDisabled) return;
  __isScrollDisabled = false;

  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
  document.body.style.paddingRight = __savedBodyPaddingRight;

  document.documentElement.style.overflow = '';

  window.scrollTo(0, __savedScroll);
  console.log('enableScroll(): restoring to', __savedScroll);
}

function resolution(isPortrait){
  const modal_content = document.getElementById('modal-content');
  modal_content.style.height = `${Math.floor(screenHeight*0.6)}px`;

  const modal1 = document.getElementById('modal1');
  modal1.style.height = `${Math.floor((modal_content.style.height)*0.78)}px`;

  const modal2 = document.getElementById('modal2');
  modal2.style.height = `${Math.floor((modal_content.style.height)*0.22)}px`;

  const modal3 = document.getElementById('modal3');

  modal3.style.height = `${Math.floor((modal_content.style.height)*0.72)}px`;

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

function showInfo(personKey) {
  disableScroll();
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
    if (id == "altaria"){
      shinyEL.src = "../img/altaria.gif";
    } else {
      shinyEL.src = `https://img.pokemondb.net/sprites/black-white/anim/shiny/${id}.gif`;
    }
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
    const shinyWrap = document.createElement('div');
    shinyWrap.className = "shiny-img-wrap";
    const shinyWrap2 = document.createElement('div');
    shinyWrap2.className = "shiny-img-wrap2";
    const destacadosEl = document.createElement('img');

    if(id.type == "alpha"){
      destacadosEl.className = "shiny-img-alpha";
    } else {
      destacadosEl.className = "shiny-img";
    }

    destacadosEl.src = `https://img.pokemondb.net/sprites/black-white/anim/shiny/${id.name}.gif`;
    
    if(id.type == "normal"){
      if (id == "altaria"){
        destacadosEl.src = "../img/altaria.gif";
      }
      shinyWrap2.appendChild(destacadosEl);
      shinyWrap.appendChild(shinyWrap2);
    } else {
      shinyWrap2.appendChild(destacadosEl);
      shinyWrap.appendChild(shinyWrap2);

      if (Array.isArray(id.type)){
        let aux = 10;
        id.type.forEach((type, index) => {
          const watermark = document.createElement('img');
          watermark.className = "shiny-effect";
          watermark.src = `../img/Icons/zz_${type}.png`;

          watermark.onload = () => {
            aux += watermark.naturalWidth;
            watermark.style.right = `${2 + aux-watermark.naturalWidth}px`;
            shinyWrap.appendChild(watermark);
          };
          
        });
      }
      else {
        const watermark = document.createElement('img');
        watermark.className = "shiny-effect";
        watermark.src = `../img/Icons/zz_${id.type}.png`
        
      shinyWrap.appendChild(watermark);
      }
    }
    shiny_container2.appendChild(shinyWrap);
  });

  if(shinys.length == 0 && destacados.length == 0 && perdidos.length == 0){
    const shinyEL = document.createElement('span');
    shiny_container2.className = "shiny-img-container-false";
    shiny_container4.className = "shiny-img-container-false";
    shinyEL.className = "medalla2";
    if(miembro.medallas.includes('m_adrix')){
      shinyEL.textContent = '☠️ Persona mega pecadora';
    } else if (miembro.medallas.includes('m_pecador')){
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
    const shinyWrap = document.createElement('div');
    shinyWrap.className = "shiny-img-wrap";
    const shinyWrap2 = document.createElement('div');
    shinyWrap2.className = "shiny-img-wrap2";
    const perdidosEl = document.createElement('img');

    if(id.type == "alpha"){
      perdidosEl.className = "shiny-img-alpha";
    } else {
      perdidosEl.className = "shiny-img";
    }
    perdidosEl.classList.add("lost-shiny");

    perdidosEl.src = `https://img.pokemondb.net/sprites/black-white/anim/shiny/${id.name}.gif`;
    
    if(id.type == "normal"){
      if (id == "altaria"){
        perdidosEl.src = "../img/altaria.gif";
      }
      shinyWrap2.appendChild(perdidosEl);
      shinyWrap.appendChild(shinyWrap2);
    } else {
      shinyWrap2.appendChild(perdidosEl);
      shinyWrap.appendChild(shinyWrap2);

      if (Array.isArray(id.type)){
        let aux = 2;
        id.type.forEach((type, index) => {
          const watermark = document.createElement('img');
          watermark.className = "shiny-effect";
          watermark.src = `../img/Icons/zz_${type}.png`;

          watermark.onload = () => {
            aux += watermark.naturalWidth;
            watermark.style.right = `${2 + aux-watermark.naturalWidth}px`;
            shinyWrap.appendChild(watermark);
          };
          
        });
      }
      else {
        const watermark = document.createElement('img');
        watermark.className = "shiny-effect";
        watermark.src = `../img/Icons/zz_${id.type}.png`
        
      shinyWrap.appendChild(watermark);
      }
    }
    shiny_container4.appendChild(shinyWrap);
  });


  //vendidos
  vendidos.forEach(id => {
    const vendidosEl = document.createElement('img');
    vendidosEl.src = `${id}`;
    vendidos.className = "shiny-img";
    shiny_container3.appendChild(vendidosEl);
    
  });

  if(vendidos.length == 0){
    const vendidosEl = document.createElement('span');
    shiny_container3.className = "shiny-img-container-false";
    vendidosEl.className = "medalla2";
    if(miembro.medallas.includes('m_adrix')){
      vendidosEl.textContent = '☠️ No quieres saber';
    } else if(miembro.name == 'Lirio'){
      vendidosEl.textContent = '🏳️‍🌈 Pecador';
    } else if (miembro.medallas.includes('m_pecador')){
      vendidosEl.textContent = '👿 Pecador no confesado';
    } else {
      vendidosEl.textContent = '😇 Persona limpia de pecado';
      vendidosEl.className = "medalla";
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
  if (personKey == toppoints.name){
    modal_name.textContent = miembro.name;
    modal_name.style = "color : yellow;"
    document.getElementById('modal-title2').innerHTML = `Shinys: ${shinys.length + destacados.length} &emsp; puntaje: ${member_points[personKey]}`;
    document.getElementById('modal-title2').style = "color : yellow;"
  }else{
    modal_name.textContent = miembro.name;
    modal_name.style = ""
    document.getElementById('modal-title2').innerHTML = `Shinys: ${shinys.length + destacados.length} &emsp; puntaje: ${member_points[personKey]}`;
    document.getElementById('modal-title2').style = ""
  }

  document.getElementById('shiny-container2').classList.add("hidden");
  document.getElementById('shiny-container').classList.add("hidden");
  document.getElementById('shiny-container3').classList.add("hidden");
  document.getElementById('shiny-container4').classList.add("hidden");
  document.getElementById('shiny-container2').classList.remove("hidden");
  document.getElementById('shiny-container').classList.remove("hidden");
  document.getElementById('shiny-container4').classList.remove("hidden");
  document.getElementById('shiny-btn').disabled = true;
  document.getElementById('sell-btn').disabled = false;

  document.getElementById('modal').style.opacity = 100;
  document.getElementById('modal').style.visibility = 'visible';

  document.body.classList.add('modal-open');
}

function closeModal() {
  enableScroll();
  document.getElementById('modal').style.opacity = 0;
  document.getElementById('modal').style.visibility = 'hidden';

  document.body.style.overflow = "";
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
    document.getElementById('shiny-btn').style.pointerEvents = 'auto';
    document.getElementById('sell-btn').style.pointerEvents = 'pointer';
    document.getElementById('shiny-btn').disabled = true;
    document.getElementById('sell-btn').disabled = false;
    const espacio2 = document.getElementById('espacio2');
    if (memberData[nombre].perdidos.length == 0){
      espacio2.style = "height: 0rem;";
    } else {
      espacio2.style = "height: 2rem;";
    }
    if (nombre == toppoints.name){
       document.getElementById('modal-title2').innerHTML = `Shinys (${memberData[nombre].shinys.length + memberData[nombre].destacados.length}) &emsp; puntaje: ${member_points[nombre]}`;
       document.getElementById('modal-title2').style = "color : yellow;"
    }else{
      document.getElementById('modal-title2').innerHTML = `Shinys (${memberData[nombre].shinys.length + memberData[nombre].destacados.length}) &emsp; puntaje: ${member_points[nombre]}`;
      document.getElementById('modal-title2').style = ""
    }
  }
}

function show_sell() {
  const nombre = document.getElementById('modal-name').textContent;
  if(document.getElementById('shiny-container3').classList[1] == 'hidden'){
    document.getElementById('shiny-container').classList.add("hidden");
    document.getElementById('shiny-container2').classList.add("hidden");
    document.getElementById('shiny-container4').classList.add("hidden");
    document.getElementById('shiny-container3').classList.remove("hidden");
    document.getElementById('shiny-btn').style.pointerEvents = 'pointer';
    document.getElementById('sell-btn').style.pointerEvents = 'auto';
    document.getElementById('espacio2').style = "height: 0rem;";
    document.getElementById('shiny-btn').disabled = false;
    document.getElementById('sell-btn').disabled = true;
    if(!memberData[nombre].medallas.includes('m_adrix')){
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