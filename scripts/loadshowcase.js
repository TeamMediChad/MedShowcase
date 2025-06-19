function renderMembers() {
  const topData = getTop(capturedBy);
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
      icon.src = '../img/giga_icon.png';
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
      icon.src = '../img/maxi_icon.png';
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
      icon.src = '../img/lider_icon.png';
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
      icon.src = '../img/shunter_medal.png';
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
      icon.src = '../img/racewinner_medal.png';
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
      icon.src = '../img/goldendex_medal.png';
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
      icon.src = '../img/supremopecador_medal.png';
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
    img.src = `https://raw.githubusercontent.com/TeamMediChad/MedShowcaseDB/refs/heads/main/Members_sprites/${key}.png`;
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
}

