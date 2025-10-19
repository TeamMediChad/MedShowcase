let toppoints = { name: "", point: 0 };
let member_points = {};
const member_container = document.getElementById('member-container');
member_container.innerHTML = '';

const miembros = Object.keys(memberData);
let memberList = []; // <-- NUEVO: almacenará la data para filtrar

// --- Calcular puntos y armar la lista base ---
miembros.forEach(key => {
  const miembro = memberData[key];
  if (!miembro || key === "Palafo") return;

  const points = calculate_points(key);
  member_points[key] = points;

  if (toppoints.name === "" || toppoints.point < points) {
    toppoints = { name: key, point: points };
  }

  // Guardamos el miembro en una lista que luego filtraremos
  memberList.push({ key, miembro, points });
});

function renderMembers(list) {
  member_container.innerHTML = '';

  list.forEach(({ key, miembro, points }) => {
    const card = document.createElement('div');
    card.className = miembro.medallas.includes('m_goldenbox') ? 'card-gold' : 'card';

    // === ICONOS Y MEDALLAS ===
    const iconContainer = document.createElement('div');
    iconContainer.className = 'card-icon-container';
    card.appendChild(iconContainer);

    const addIcon = (src, tooltipText) => {
      const icon = document.createElement('img');
      icon.src = src;
      icon.className = 'card-icon';
      const wrapper = document.createElement('span');
      wrapper.className = 'tooltip';
      const tip = document.createElement('span');
      tip.className = 'tooltiptext';
      tip.textContent = tooltipText;
      wrapper.appendChild(icon);
      wrapper.appendChild(tip);
      iconContainer.appendChild(wrapper);
    };

    // Roles y medallas (tu misma lógica, más compacta)
    if (miembro.rol === 'MegaChad') addIcon('../img/Medals/mega_icon.png', 'MegaChad');
    if (miembro.rol === 'GigaChad') addIcon('../img/Medals/giga_icon.png', 'GigaChad');
    if (miembro.rol === 'MaxiChad') addIcon('../img/Medals/maxi_icon.png', 'MaxiChad');
    if (miembro.rol === 'Lider') addIcon('../img/Medals/lider_icon.png', 'Líder');
    if (miembro.medallas.includes('m_shunter')) addIcon('../img/Medals/shunter_medal.png', 'Shunter del mes');
    if (miembro.medallas.includes('m_raceW')) addIcon('../img/Medals/racewinner_medal.png', 'Shiny Race');
    if (miembro.name === topData.trainer) addIcon('../img/Medals/goldendex_medal.png', 'Maestro Apóstol');
    if (miembro.name === 'AdrixJK') addIcon('../img/Medals/supremopecador_medal.png', 'Supremo Pecador');

    card.onclick = () => showInfo(key);

    // === IMAGEN Y DATOS ===
    const img_wrap = document.createElement('div');
    img_wrap.className = "card-img-wrapper";
    const img = document.createElement('img');
    img.src = `../Members_sprites/${key}.png`;
    img.onerror = () => (img.src = `../Members_sprites/Placeholder.png`);
    img.className = 'card-img';
    img_wrap.appendChild(img);
    card.appendChild(img_wrap);

    const title = document.createElement('h2');
    title.className = 'card-title';
    title.id = `${key}`;
    title.textContent = miembro.name;
    card.appendChild(title);

    // Mostrar puntos y cantidad de shinys
    const shinyCount = document.createElement('p');
    shinyCount.className = 'card-role';
    if(toppoints.name == miembro.name){
      shinyCount.style = "color : yellow;"
    }
    else{
      shinyCount.style = ""
    }
    shinyCount.innerHTML = `Shinys: ${(miembro.shinys?.length || 0) + (miembro.destacados?.length || 0)} &emsp; Puntaje: ${points}`;
    card.appendChild(shinyCount);

    const pointsEl = document.createElement('p');
    pointsEl.className = 'card-role';
    pointsEl.textContent = `Puntos: ${points}`;
    pointsEl.style = "display : none;"
    card.appendChild(pointsEl);

    member_container.appendChild(card);
  });

  // Resalta al top
  document.getElementById(toppoints.name)?.style.setProperty('color', 'yellow');
}

// Render inicial
renderMembers(memberList);


// === FILTROS ===
const inputName = document.getElementById('filter-name');
const selectShinys = document.getElementById('filter-shinys');
const selectPoints = document.getElementById('filter-points');

selectShinys.addEventListener('change', () => {
  if (selectShinys.value !== 'none') {
    selectPoints.value = 'none';
  }
});

selectPoints.addEventListener('change', () => {
  if (selectPoints.value !== 'none') {
    selectShinys.value = 'none';
  }
});

function applyFilters() {
  let filtered = [...memberList];

  const nameFilter = inputName?.value.trim().toLowerCase();
  if (nameFilter) {
    filtered = filtered.filter(m => m.miembro.name.toLowerCase().includes(nameFilter));
  }

  if (selectShinys?.value !== 'none') {
    filtered.sort((a, b) => {
      const countA = (a.miembro.shinys?.length || 0) + (a.miembro.destacados?.length || 0);
      const countB = (b.miembro.shinys?.length || 0) + (b.miembro.destacados?.length || 0);
      return selectShinys.value === 'asc' ? countA - countB : countB - countA;
    });
  }

  if (selectPoints?.value !== 'none') {
    filtered.sort((a, b) => selectPoints.value === 'asc' ? a.points - b.points : b.points - a.points);
  }

  renderMembers(filtered);
}

inputName?.addEventListener('input', applyFilters);
selectShinys?.addEventListener('change', applyFilters);
selectPoints?.addEventListener('change', applyFilters);
