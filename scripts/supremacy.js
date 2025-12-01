let espacio = document.createElement("div");
espacio.className = "team-empty"
espacio.style.setProperty("--i", 10);

let container2 = document.getElementById("tabla-supremacy");

  let participantesArray = participantes
  .trim()
  .split("\n")
  .map(line => {
    const [nStr, ...rest] = line.trim().split(/\s+/);
    const participante = rest.join(" ") || "nan";
    return { n: parseInt(nStr), participante };
  })
  .filter(r => !isNaN(r.n));

if (container2 != null) {
  for (let i = 1; i <= participantesArray.length; i++) {
    let card = document.createElement("div");
    let participante = participantesArray.find(r => r.n === i);

    if (participante && participante.participante !== 'nan') {
      card.className = "participante-card";

      const img_wrap = document.createElement('div');
      img_wrap.className = "participante-img-wrapper";
      card.appendChild(img_wrap);

      const img = document.createElement('img');
      img.src = `../Members_sprites/${participante.participante}.png`;
      img.onerror = function () {
        this.src = `../Members_sprites/Placeholder.png`;
      };
      img.className = 'participante-img';
      img_wrap.appendChild(img);

      const title = document.createElement('h2');
      title.className = 'participante-title';
      title.id = `${participante.participante}`;
      title.textContent = i + ": " + participante.participante;
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


let titulosupremacy = document.getElementById("titulo-supremacy");
if(titulosupremacy != null){
  let ocupados2 = participantesArray.filter(r => r.participante !== 'nan').length;
  titulosupremacy.textContent = `Particiantes confirmados: ${ocupados2}`;
}
