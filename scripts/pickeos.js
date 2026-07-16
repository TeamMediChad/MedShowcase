const lideres = [
  { nombre: "Team Fire", user: "KnowJiYong", button:'fire' },
  { nombre: "Team Ice", user: "Pancho", button:'ice' }
];

let Ice_lista = [];
let Fire_lista = [];
Ice_lista.push('Pancho');
Fire_lista.push('KnowJiYong');

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
      <button onclick="copiar${lider.button}()" class="text-white ${lider.button}-btn">Copiar Lista</button>
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
    if (!(cardElement.classList[1] == "card-team-Fire" || cardElement.classList[1] == "card-team-Ice")){
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
        close.onclick = (event) => remove(event, p.participante);
        close.textContent = "X"
        card.appendChild(close);

        card.id = `${p.participante}`;
        lideres.forEach(l => {
            if (p.participante === l.user) {
                let team =
                    l.nombre.includes("Fire") ? "Fire" :
                    "Ice"

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
    if(team == "Fire"){
        handlelist('KnowJiYong',team, 'add');
        Fire_lista.push(participanteSeleccionado);
    }else if(team == "Ice"){
        handlelist('Pancho',team, 'add');
        Ice_lista.push(participanteSeleccionado);
    }

    const removeBtn = currentcard.querySelector(".card-remove-btn");
    if (removeBtn) removeBtn.style.display = "block";

    modal.classList.add("hidden");
    participanteSeleccionado = null;
    currentcard = null;
}

function remove(event, nombre) {
    event.stopPropagation();
    const card = event.target.closest(".participante-card");
    if (!card) return;

    if(card.classList[1] == "card-team-Fire"){
        handlelist('KnowJiYong','Fire',card.id);
        const index = Fire_lista.indexOf(nombre);
        if (index !== -1) Fire_lista.splice(index, 1);
    } else if(card.classList[1] == "card-team-Ice"){
        handlelist('Pancho','Ice',card.id);
        const index = Ice_lista.indexOf(nombre);
        if (index !== -1) Ice_lista.splice(index, 1);
    }
    card.classList.remove("card-team-Fire", "card-team-Ice");
    event.target.style.display = "none";
}

function copiarxmas() {
    if (!Fire_lista || Fire_lista.length === 0) return;
    let texto = "";
    Fire_lista.forEach((nombre, index) => {
        if (index === 0) {
            texto += `${index + 1}.- ${nombre} (L)\n`;
        } else {
            texto += `${index + 1}.- ${nombre}\n`;
        }
    });
    navigator.clipboard.writeText(texto)
}

function copiarIce() {
    if (!Ice_lista || Ice_lista.length === 0) return;
    let texto = "";
    Ice_lista.forEach((nombre, index) => {
        if (index === 0) {
            texto += `${index + 1}.- ${nombre} (L)\n`;
        } else {
            texto += `${index + 1}.- ${nombre}\n`;
        }
    });
    navigator.clipboard.writeText(texto)
}