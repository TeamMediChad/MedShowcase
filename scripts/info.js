let listaMedalla = {};
let memberData = {};
let capturedBy = {};

Promise.all([
  fetch("https://raw.githubusercontent.com/TeamMediChad/MedShowcaseDB/refs/heads/main/medallas.json").then(res => res.json()),
  fetch("https://raw.githubusercontent.com/TeamMediChad/MedShowcaseDB/refs/heads/main/members.json").then(res => res.json()),
  fetch("https://raw.githubusercontent.com/TeamMediChad/MedShowcaseDB/refs/heads/main/capturedBy.json").then(res => res.json())
])
.then(([medallas, miembros, dex]) => {
  listaMedalla = medallas;
  memberData = miembros;
  capturedBy = dex;
  renderMembers();
})
.catch(error => console.error("Error cargando datos:", error));