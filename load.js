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

  const card = document.createElement('div');
  card.className= 'card';
  card.onclick = () => showInfo(key);


  const img_wrap = document.createElement('div');
  img_wrap.className = "modal-img-wrapper";
  card.appendChild(img_wrap);

  const img = document.createElement('img');
  img.src = `Members_sprites/${key}.png`;
  img.onerror = function () {
    this.src = `Members_sprites/Placeholder.png`;
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
