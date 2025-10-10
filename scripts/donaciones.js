let data = [
  {name: "Souen", dinero: 800000},
  {name: "KnowYiJong", dinero: 500000},
  {name: "aeamanh", dinero: 1100000},
  {name: "Pancho", dinero: 2050000},
  {name: "ritosenpai", dinero: 1100000},
  {name: "YuukiTwo", dinero: 11500000},
  {name: "Cece", dinero: 600000},
  {name: "JuniorJMx", dinero: 900000},
  {name: "Ashy", dinero: 200000},
  {name: "Mittoh", dinero: 800000},
  {name: "ToxicPlumber", dinero: 200000},
  {name: "Sato", dinero: 300000},
  {name: "MarkosW", dinero: 300000},
  {name: "Cypher", dinero: 200000},
  {name: "AdrixJK", dinero: 500000},
  {name: "ElMiga", dinero: 150000},
  {name: "Iucifer", dinero: 200000},
  {name: "DiGoMo", dinero: 1100000},
  {name: "Lirio", dinero: 100000},
  {name: "nyumichaelis", dinero: 1200000},
  {name: "Ingrid", dinero: 300000},
  {name: "Liarfuneral", dinero: 100000},
  {name: "XlDarcklX", dinero: 400000},
  {name: "Renz", dinero: 800000},
  {name: "Shroomiish", dinero: 100000},
  {name: "MonkeyCake", dinero: 100000},
  {name: "Alicia", dinero: 500000},
  {name: "Alakxel", dinero: 20000000},
  {name: "CmAshto", dinero: 110000},
  {name: "Mexb", dinero: 795000},
  {name: "Azathotx", dinero: 200000},
  {name: "LMMRKNRM", dinero: 700000},
  {name: "Monozee", dinero: 100000},
  {name: "Murkrow", dinero: 200000},
];

let rifadores = [
  {n: 1, participante: "Seaba"},
  {n: 3, participante: "Lirio"},
  {n: 4, participante: "Ferbus"},
  {n: 7, participante: "Souen"},
  {n: 8, participante: "Ferbus"},
  {n: 9, participante: "OniED"},
  {n: 10, participante: "Pancho"},
  {n: 11, participante: "OniED"},
  {n: 12, participante: "Gamuvk"},
  {n: 13, participante: "OniED"},
  {n: 14, participante: "Seaba"},
  {n: 15, participante: "Pancho"},
  {n: 16, participante: "OniED"},
  {n: 18, participante: "Pancho"},
  {n: 21, participante: "Souen"},
  {n: 23, participante: "IvanMKS"},
  {n: 24, participante: "Souen"},
  {n: 26, participante: "Guabixd"},
  {n: 27, participante: "IvanMKS"},
  {n: 29, participante: "OniED"},
  {n: 31, participante: "KnowJiYong"},
  {n: 33, participante: "Lirio"},
  {n: 34, participante: "Murkrow"},
  {n: 41, participante: "KnowJiYong"},
  {n: 42, participante: "Seaba"},
  {n: 44, participante: "Ferbus"},
  {n: 45, participante: "Souen"},
  {n: 47, participante: "Lirio"},
  {n: 51, participante: "KnowJiYong"},
  {n: 52, participante: "Guabixd"},
  {n: 58, participante: "IvanMKS"},
  {n: 61, participante: "KnowJiYong"},
  {n: 63, participante: "Guabixd"},
  {n: 66, participante: "Gamuvk"},
  {n: 67, participante: "Seaba"},
  {n: 68, participante: "Gamuvk"},
  {n: 69, participante: "Lirio"},
  {n: 71, participante: "KnowJiYong"},
  {n: 74, participante: "Guabixd"},
  {n: 77, participante: "SamuDG"},
  {n: 79, participante: "Murkrow"},
  {n: 83, participante: "Seaba"},
  {n: 87, participante: "Gamuvk"},
  {n: 88, participante: "Ferbus"},
  {n: 89, participante: "Guabixd"},
  {n: 92, participante: "SamuDG"},
  {n: 93, participante: "Gamuvk"},
  {n: 98, participante: "Souen"},
  {n: 99, participante: "Lirio"},
  {n: 100, participante: "IvanMKS"},
];


let espacio = document.createElement("div");
espacio.className = "team-empty"
espacio.style.setProperty("--i", 10);

let container = document.getElementById("tabla-donadores");
let container2 = document.getElementById("tabla-rifa");

data.sort((a, b) => {
    if (b.dinero === a.dinero) {
      return a.name.localeCompare(b.name);
    }
    return b.dinero - a.dinero;
  }).forEach((e, i) => (e.rank = i));

const data2 = data.slice(0,10)

if(container != null){
  data2.forEach((el, i) => {
    let box = document.createElement("div");
    box.className = "team";
    box.style.setProperty("--i", i);
    let name = document.createElement("span");
    name.className = "name";
    name.innerHTML = el.name;
    let dinero = document.createElement("span");
    dinero.className = "dinero";
    dinero.innerHTML = el.dinero;
    let num = Number(dinero.innerHTML).toLocaleString('en');
    dinero.innerHTML = num;
    box.appendChild(name);
    box.appendChild(dinero);
    box.style.setProperty("--color", "#5b2727ff");
    container.appendChild(box);
  });
  container.appendChild(espacio);
}

if(container2 != null){
  for(let i = 1; i < 101; i++){
    let card = document.createElement("div");
    let rifador = rifadores.find(r => r.n === i);
    if (rifador) {
      card.className = "participante-card";

      const img_wrap = document.createElement('div');
      img_wrap.className = "participante-img-wrapper";
      card.appendChild(img_wrap);

      const img = document.createElement('img');
      img.src = `../Members_sprites/${rifador.participante}.png`;
      img.onerror = function () {
        this.src = `../Members_sprites/Placeholder.png`;
      };
      img.className = 'participante-img';
      img_wrap.appendChild(img);

      const title = document.createElement('h2');
      title.className = 'participante-title';
      title.id = `${rifador.participante}`;
      title.textContent = i + ": " + rifador.participante;
      card.appendChild(title);


    } else {
      // No tomado
      card.className = "none-card";
       const img_wrap = document.createElement('div');
      img_wrap.className = "participante-img-wrapper";
      card.appendChild(img_wrap);

      const img = document.createElement('img');
      img.className = 'participante-img';
      img_wrap.appendChild(img);

      const title = document.createElement('h2');
      title.className = 'participante-title';
      title.id = `${i}`;
      title.textContent = i + ": libre";
      card.appendChild(title);
    }
    container2.appendChild(card);
  }
}

let titulorifa = document.getElementById("titulo-rifa");
titulorifa.textContent = `Números restantes: ${(100 - rifadores.length)}/100`