let toppoints = {
    name: "",
    point: 0 
  };

let member_points = {};
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

  const points = calculate_points(key);

  if(toppoints.name == ""){
    toppoints.name = key;
    toppoints.point = points;
  } else {
    if(toppoints.point < points){
      toppoints.name = key;
      toppoints.point = points;
    }
  }
  
  //contenedor de medallas en tarjeta
  const iconContainer = document.createElement('div');
  iconContainer.className = 'card-icon-container';
  card.appendChild(iconContainer);

  //MegaChad
  if(miembro.rol == 'MegaChad'){

    const icon = document.createElement('img');
    icon.src = '../img/Medals/mega_icon.png';
    icon.className = 'card-icon';

    const tooltipWrapper = document.createElement('span');
    tooltipWrapper.className = 'tooltip';

    const tooltip = document.createElement('span');
    tooltip.className = 'tooltiptext';
    tooltip.textContent = 'MegaChad';

    tooltipWrapper.appendChild(icon);
    tooltipWrapper.appendChild(tooltip);

    iconContainer.appendChild(tooltipWrapper);

    
  }

  //GigaChad
  if(miembro.rol == 'GigaChad'){
    const icon = document.createElement('img');
    icon.src = '../img/Medals/giga_icon.png';
    icon.className = 'card-icon';
    
    const tooltipWrapper = document.createElement('span');
    tooltipWrapper.className = 'tooltip';

    const tooltip = document.createElement('span');
    tooltip.className = 'tooltiptext';
    tooltip.textContent = 'GigaChad';

    tooltipWrapper.appendChild(icon);
    tooltipWrapper.appendChild(tooltip);

    iconContainer.appendChild(tooltipWrapper);
  }

  //MaxiChad
  if(miembro.rol == 'MaxiChad'){
    const icon = document.createElement('img');
    icon.src = '../img/Medals/maxi_icon.png';
    icon.className = 'card-icon';
    
    const tooltipWrapper = document.createElement('span');
    tooltipWrapper.className = 'tooltip';

    const tooltip = document.createElement('span');
    tooltip.className = 'tooltiptext';
    tooltip.textContent = 'MaxiChad';

    tooltipWrapper.appendChild(icon);
    tooltipWrapper.appendChild(tooltip);

    iconContainer.appendChild(tooltipWrapper);
  }

  //Lider
  if(miembro.rol == 'Lider'){
    const icon = document.createElement('img');
    icon.src = '../img/Medals/lider_icon.png';
    icon.className = 'card-icon';
    
    const tooltipWrapper = document.createElement('span');
    tooltipWrapper.className = 'tooltip';

    const tooltip = document.createElement('span');
    tooltip.className = 'tooltiptext';
    tooltip.textContent = 'Lider';

    tooltipWrapper.appendChild(icon);
    tooltipWrapper.appendChild(tooltip);

    iconContainer.appendChild(tooltipWrapper);
  }

  //shunter del mes
  if(miembro.medallas.includes('b11')){
    const icon = document.createElement('img');
    icon.src = '../img/Medals/shunter_medal.png';
    icon.className = 'card-icon';
    
    const tooltipWrapper = document.createElement('span');
    tooltipWrapper.className = 'tooltip';

    const tooltip = document.createElement('span');
    tooltip.className = 'tooltiptext';
    tooltip.textContent = 'Shunter del mes';

    tooltipWrapper.appendChild(icon);
    tooltipWrapper.appendChild(tooltip);

    iconContainer.appendChild(tooltipWrapper);
  }

  //race winner
  if(miembro.medallas.includes('b13')){
    const icon = document.createElement('img');
    icon.src = '../img/Medals/racewinner_medal.png';
    icon.className = 'card-icon';
    
    const tooltipWrapper = document.createElement('span');
    tooltipWrapper.className = 'tooltip';

    const tooltip = document.createElement('span');
    tooltip.className = 'tooltiptext';
    tooltip.textContent = 'Shiny Race';

    tooltipWrapper.appendChild(icon);
    tooltipWrapper.appendChild(tooltip);

    iconContainer.appendChild(tooltipWrapper);
  }

  //Golden dex
  if(miembro.name == topData.trainer){
    const icon = document.createElement('img');
    icon.src = '../img/Medals/goldendex_medal.png';
    icon.className = 'card-icon';
    
    const tooltipWrapper = document.createElement('span');
    tooltipWrapper.className = 'tooltip';

    const tooltip = document.createElement('span');
    tooltip.className = 'tooltiptext';
    tooltip.textContent = 'Maestro Apóstol';

    tooltipWrapper.appendChild(icon);
    tooltipWrapper.appendChild(tooltip);

    iconContainer.appendChild(tooltipWrapper);
  }

  //Supremo Pecador
  if(miembro.name == 'AdrixJK'){
    const icon = document.createElement('img');
    icon.src = '../img/Medals/supremopecador_medal.png';
    icon.className = 'card-icon';
    
    const tooltipWrapper = document.createElement('span');
    tooltipWrapper.className = 'tooltip';

    const tooltip = document.createElement('span');
    tooltip.className = 'tooltiptext';
    tooltip.textContent = 'Supremo Pecador';

    tooltipWrapper.appendChild(icon);
    tooltipWrapper.appendChild(tooltip);

    iconContainer.appendChild(tooltipWrapper);
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
  title.id = `${key}`
  title.textContent = miembro.name;
  member_points[key] = points;
  card.appendChild(title);

  // Crear rol
  const role = document.createElement('p');
  role.className = 'card-role';
  role.textContent = miembro.rol;
  card.appendChild(role);

  member_container.appendChild(card);

});

document.getElementById(toppoints.name).style = "color : yellow;";
