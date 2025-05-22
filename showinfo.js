
    function showInfo(personKey) {
      const medalla_container = document.getElementById('medalla-container');
      const shiny_container = document.getElementById('shiny-container');
      const shiny_container2 = document.getElementById('shiny-container2');
      medalla_container.innerHTML = '';
      shiny_container.innerHTML = '';
      shiny_container2.innerHTML = '';

      // sort
      const miembro = memberData[personKey] || [];
      if (!miembro) return;
    
      const medallas = miembro.medallas || [];
      const shinys = miembro.shinys || [];
      const destacados = miembro.destacados || [];

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
        shiny_container.appendChild(shinyEL);
        
      });

      // destacados
      destacados.forEach(id => {
        const destacadosEl = document.createElement('img');
        destacadosEl.src = `${id}`;
        shiny_container2.appendChild(destacadosEl);
        
      });

      document.getElementById('modal').classList.remove('hidden');
    }

    function closeModal() {
      document.getElementById('modal').classList.add('hidden');
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
    