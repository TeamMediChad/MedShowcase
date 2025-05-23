
    function showInfo(personKey) {
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
      member_img_modal.src = `Members_sprites/${miembro.name}.png`;
      member_img_modal.onerror = function () {
        this.src = `Members_sprites/Placeholder.png`;
      }

      modal_name = document.getElementById('modal-name');
      modal_name.textContent = miembro.name;

      document.getElementById('modal-title2').textContent = `Shinys (${shinys.length + destacados.length})`;

      document.getElementById('modal').style.opacity = 100;
      document.getElementById('modal').style.visibility = 'visible';
    }

    function closeModal() {
      document.getElementById('modal').style.opacity = 0;
      document.getElementById('modal').style.visibility = 'hidden';
    }

    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    document.getElementById('modal').addEventListener('click', function (e) {
    const modalContent = document.querySelector('.modal-content');
    if (!modalContent.contains(e.target)) {
      closeModal();
    }
  });
    