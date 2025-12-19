const lideres = [
  { nombre: "Team Navidad", user: "OniED" },
  { nombre: "Team Halloween", user: "Souen" },
  { nombre: "Team Año Nuevo", user: "LauraSkylar" }
];


function asignarInicial(card, liderUser, team) {
    card.classList.add(`card-team-${team}`);
    const removeBtn = card.querySelector(".card-remove-btn");
    if (removeBtn) removeBtn.style.display = "block";
}


const equiposContainer = document.getElementById("equipos-container");

lideres.forEach(lider => {
  const col = document.createElement("div");
  col.className = "p-4 bg-black bg-opacity-40 rounded-xl shadow-xl";

  col.innerHTML = `
    <h3 class="font-bold text-center mb-2" style="font-family: 'Retro'; font-size: 32px">${lider.nombre}</h3>

    <div class="flex flex-col items-center">
      <img src="../Members_sprites/${lider.user}.png"
           onerror="this.src='../Members_sprites/Placeholder.png'">

      <p class="mb-4 text-center" style="font-family: 'Retro'; font-size: 32px">${lider.user}</p>

      <ul id="lista-${lider.user}"
          class="mt-2 flex flex-wrap gap-2 justify-center w-full"></ul>
    </div>
  `;

  equiposContainer.appendChild(col);
});

const modal = document.getElementById("modal");
const modalName = document.getElementById("modal-name");
const modalImg = document.getElementById("modal-img");

let participanteSeleccionado = null;
let currentcard = null;

function selection(cardElement, nombre) {
    if (!(cardElement.classList[1] == "card-team-Navidad" || cardElement.classList[1] == "card-team-Halloween" || cardElement.classList[1] == "card-team-Nuevoyear")){
        currentcard = cardElement;
        participanteSeleccionado = nombre;
        modalName.textContent = nombre;
        modalImg.src = `../Members_sprites/${nombre}.png`;
        modalImg.onerror = function () {
            this.src = `../Members_sprites/Placeholder.png`;
        };
        modal.classList.remove("hidden");
    }
}

let container3 = document.getElementById("tabla-supremacy-pick");

participantesArray.forEach(p => {
    let card = document.createElement("div");
    if (p.participante !== 'nan') {
        card.className = "participante-card";

        const img_wrap = document.createElement('div');
        img_wrap.className = "participante-img-wrapper";
        card.appendChild(img_wrap);

        const img = document.createElement('img');
        img.src = `../Members_sprites/${p.participante}.png`;
        img.onerror = function () {
            this.src = `../Members_sprites/Placeholder.png`;
        };
        img.className = 'participante-img';
        img_wrap.appendChild(img);

        const title = document.createElement('h2');
        title.className = 'participante-title';
        title.id = `${p.participante}`;
        title.textContent = p.n + ": " + p.participante;
        card.onclick = () => selection(card, p.participante);
        card.appendChild(title);

        const close = document.createElement('div');
        close.className = "card-remove-btn";
        close.onclick = (event) => remove(event);
        close.textContent = "X"
        card.appendChild(close);

        card.id = `${p.participante}`;
        lideres.forEach(l => {
            if (p.participante === l.user) {
                let team =
                    l.nombre.includes("Navidad") ? "Navidad" :
                    l.nombre.includes("Halloween") ? "Halloween" :
                    "Nuevoyear";

                asignarInicial(card, l.user, team);
                close.style.pointerEvents = "none";
                close.style.opacity = "0.0";
            }
        });
    } else {
        card.className = "none-card";

        const img_wrap = document.createElement('div');
        img_wrap.className = "participante-img-wrapper";
        card.appendChild(img_wrap);

        const img = document.createElement('img');
        img.className = 'participante-img';
        img_wrap.appendChild(img);

        const title = document.createElement('h2');
        title.className = 'participante-title';
        title.id = `${p.n}`;
        title.textContent = p.n + ": libre";
        card.appendChild(title);
    }
    container3.appendChild(card);
})

lideres.forEach(lider => {
  const lista = document.getElementById(`lista-${lider.user}`);

});

const modalClose = document.getElementById("modal-close");
modalClose.addEventListener("click", () => {
  modal.classList.add("hidden");
  participanteSeleccionado = null;
   currentcard = null;
});


modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    participanteSeleccionado = null;
     currentcard = null;
  }
});


let lista_lider = null

function handlelist(lider, team, action){
    lista_lider = document.getElementById(`lista-${lider}`);
    let miembroT = null;
    if(action == 'add'){
        const miembroT = document.createElement('div');
        miembroT.className = 'miembro-holder';
        miembroT.style = `border-image-source: url("../img/button/${team}-container.png");`

        const img = document.createElement('img');
        img.className = 'miembro-img';
        img.src = `../Members_sprites/${participanteSeleccionado}.png`;
        img.onerror = function () {
            this.src = `../Members_sprites/Placeholder.png`;
        };

        const name = document.createElement('span');
        name.className = 'miembro-name';
        name.textContent = participanteSeleccionado;

        miembroT.id = `${team}-${participanteSeleccionado}`;

        miembroT.appendChild(img);
        miembroT.appendChild(name);

        lista_lider.appendChild(miembroT);
        currentcard.classList.add(`card-team-${team}`); 
    }
    else{
        miembroT = document.getElementById(`${team}-${action}`);
        miembroT.remove();
    }
    
}

function add(team){
    if(team == "Navidad"){
        handlelist('OniED',team, 'add');
    }else if(team == "Halloween"){
        handlelist('LauraSkylar',team, 'add');
    }else if(team == "Nuevoyear"){
        handlelist('Souen',team, 'add');
    }

    const removeBtn = currentcard.querySelector(".card-remove-btn");
    if (removeBtn) removeBtn.style.display = "block";

    modal.classList.add("hidden");
    participanteSeleccionado = null;
    currentcard = null;
}

function remove(event) {
    event.stopPropagation();
    const card = event.target.closest(".participante-card");
    if (!card) return;

    if(card.classList[1] == "card-team-Navidad"){
        handlelist('OniED','Navidad',card.id);
    } else if(card.classList[1] == "card-team-Halloween"){
        handlelist('LauraSkylar','Halloween',card.id);
    } else if(card.classList[1] == "card-team-Nuevoyear"){
        handlelist('Souen','Nuevoyear',card.id);
    }

    card.classList.remove("card-team-Navidad", "card-team-Halloween", "card-team-Nuevoyear");
    event.target.style.display = "none";
}