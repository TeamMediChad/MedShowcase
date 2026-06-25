const CACHE_TIME_MEMBERS = 1000 * 60 * 30;
const CACHE_TIME_SHINYS = 1000 * 60 * 2;
const member_container = document.getElementById('member-container');
member_container.innerHTML = '';

memberlist = [];

async function get_members() {
  const key = `lista_miembros`;
  const cached = localStorage.getItem(key);

  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_TIME_MEMBERS) {
      console.log('cached member_list')
      return data;
    }
  }
  
  const response = await fetch("https://worker-med.med-showcase.workers.dev/usuarios");
  const usuarios = await response.json();

  localStorage.setItem(
    key,
    JSON.stringify({
      data: usuarios,
      timestamp: Date.now()
    })
  );

  console.log('fetched member_list')
  return usuarios
}

function open_showcase(user){
  window.location.href = `detalle.html?member=${user}`
}

function renderMembers(list) {
  member_container.innerHTML = '';

  for (const usuario of list) {

    const card = document.createElement('div');
    card.className = 'card';

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

    if (usuario.rango === 'MegaChad') addIcon('../../img/Medals/mega_icon.png', 'MegaChad');
    if (usuario.rango === 'GigaChad') addIcon('../../img/Medals/giga_icon.png', 'GigaChad');
    if (usuario.rango === 'MaxiChad') addIcon('../../img/Medals/maxi_icon.png', 'MaxiChad');
    if (usuario.rango === 'Lider')    addIcon('../../img/Medals/lider_icon.png', 'Líder');

    card.onclick = () => get_member_data(usuario.nombre).then(membershinys => {
      showInfo(membershinys);
    })

    const img_wrap = document.createElement('div');
    img_wrap.className = "card-img-wrapper";
    const img = document.createElement('img');
    img.src = `../../Members_sprites/${usuario.nombre}.png`;
    img.onerror = () => (img.src = `../../Members_sprites/Placeholder.png`);
    img.className = 'card-img';
    img_wrap.appendChild(img);
    card.appendChild(img_wrap);

    const title = document.createElement('h2');
    title.className = 'card-title';
    title.id = `${usuario.nombre}`;
    title.textContent = usuario.nombre;
    card.appendChild(title);

    member_container.appendChild(card);
  };
}

// Render inicial
get_members().then(usuarios => {
  memberlist = usuarios;
  renderMembers(usuarios);
})


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
  let filtered = [...memberlist];

  const nameFilter = inputName?.value.trim().toLowerCase();
  if (nameFilter) {
    filtered = filtered.filter(m => m.nombre.toLowerCase().includes(nameFilter));
  }
  /*if (selectShinys?.value !== 'none') {
    filtered.sort((a, b) => {
      const countA = (a.miembro.shinys?.length || 0) + (a.miembro.destacados?.length || 0);
      const countB = (b.miembro.shinys?.length || 0) + (b.miembro.destacados?.length || 0);
      return selectShinys.value === 'asc' ? countA - countB : countB - countA;
    });
  }

  if (selectPoints?.value !== 'none') {
    filtered.sort((a, b) => selectPoints.value === 'asc' ? a.points - b.points : b.points - a.points);
  }*/

  renderMembers(filtered);
}

inputName?.addEventListener('input', applyFilters);
//selectShinys?.addEventListener('change', applyFilters);
//selectPoints?.addEventListener('change', applyFilters);
