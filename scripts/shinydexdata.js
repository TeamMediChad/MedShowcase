let generations = {};
let capturedBy = {};
let memberData = {};

Promise.all([
  fetch("https://raw.githubusercontent.com/TeamMediChad/MedShowcaseDB/refs/heads/main/generations.json").then(res => res.json()),
  fetch("https://raw.githubusercontent.com/TeamMediChad/MedShowcaseDB/refs/heads/main/capturedBy.json").then(res => res.json()),
  fetch("https://raw.githubusercontent.com/TeamMediChad/MedShowcaseDB/refs/heads/main/members.json").then(res => res.json())
])
.then(([gen, dex, members]) => {
  generations = gen;
  capturedBy = dex;
  memberData = members;
  renderShinydex();
})
.catch(error => console.error("Error cargando datos:", error));

function getSpriteURL(name) {
    return `https://img.pokemondb.net/sprites/black-white/anim/shiny/${name}.gif`;
}