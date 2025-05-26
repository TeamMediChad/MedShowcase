window.addEventListener('load', function () {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
});

const member_container = document.getElementById('member-container');
member_container.innerHTML = '';

// Obtener claves de miembros
const miembros = Object.keys(memberData);

// Para cada miembro
miembros.forEach(key => {
  const miembro = memberData[key];
  if (!miembro) return;

  //verificar si tiene golden box
  const card = document.createElement('div');
  if(miembro.medallas.includes('b23')){
    card.className= 'card-gold';
  } else {
    card.className= 'card';
  }
  
  //contenedor de medallas en tarjeta
  const iconContainer = document.createElement('div');
  iconContainer.className = 'card-icon-container';
  card.appendChild(iconContainer);

  //MegaChad
  if(miembro.rol == 'MegaChad'){
    const icon = document.createElement('img');
    icon.src = '../img/mega_icon.png';
    icon.className = 'card-icon';
    iconContainer.appendChild(icon);
  }

  //GigaChad
  if(miembro.rol == 'GigaChad'){
    const icon = document.createElement('img');
    icon.src = '../img/giga_icon.png';
    icon.className = 'card-icon';
    iconContainer.appendChild(icon);
  }

  //MaxiChad
  if(miembro.rol == 'MaxiChad'){
    const icon = document.createElement('img');
    icon.src = '../img/maxi_icon.png';
    icon.className = 'card-icon';
    iconContainer.appendChild(icon);
  }

  //Lider
  if(miembro.rol == 'Lider'){
    const icon = document.createElement('img');
    icon.src = '../img/lider_icon.png';
    icon.className = 'card-icon';
    iconContainer.appendChild(icon);
  }

  //race winner
  if(miembro.medallas.includes('b13')){
    const icon = document.createElement('img');
    icon.src = '../img/medal_icon.png';
    icon.className = 'card-icon';
    iconContainer.appendChild(icon);
  }
  card.onclick = () => showInfo(key);


  const img_wrap = document.createElement('div');
  img_wrap.className = "card-img-wrapper";
  card.appendChild(img_wrap);

  const img = document.createElement('img');
  img.src = `../Members_sprites/${key}.png`;
  img.onerror = function () {
    this.src = `../Members_sprites/Placeholder.png`;
  }
  img.className = 'card-img';
  img_wrap.appendChild(img);

  const title = document.createElement('h2');
  title.className = 'card-title';
  title.textContent = miembro.name;
  card.appendChild(title);

  // Crear rol
  const role = document.createElement('p');
  role.className = 'card-role';
  role.textContent = miembro.rol;
  card.appendChild(role);

  member_container.appendChild(card);

});
