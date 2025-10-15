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

let rifadoresArray = rifadores
  .trim()
  .split("\n")
  .map(line => {
    const [nStr, ...rest] = line.trim().split(/\s+/);
    const participante = rest.join(" ") || "nan";
    return { n: parseInt(nStr), participante };
  })
  .filter(r => !isNaN(r.n));

if (container2 != null) {
  for (let i = 1; i <= 150; i++) {
    let card = document.createElement("div");
    let rifador = rifadoresArray.find(r => r.n === i);

    if (rifador && rifador.participante !== 'nan') {
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
let ocupados = rifadoresArray.filter(r => r.participante !== 'nan').length;
titulorifa.textContent = `Números restantes: ${150 - ocupados}/150`;