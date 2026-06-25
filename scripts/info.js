export const listaMedalla = {
  m_vacio:      {name: 'vacío', info: '...'},
  m_gomed:      {name: '🎮 Go MeD', info:'Tienes 1 año o mas en el team'},
  m_cambio:     {name: '💰 Quédate el cambio', info: 'Has donado 10m o mas al banco del team de una sola vez'},
  m_fundador:   {name: '🧩 Pieza clave', info: 'Formas parte de los miembros fundadores del team'},
  m_lider:      {name: '👑 Dictador', info: 'Has sido líder de MeD'},
  m_guardian:   {name: '💂 Guardián', info: 'Has kickeado a alguien de MeD'},
  m_meditite:   {name: '🧘 Cuerpo y mente', info: 'Has obtenido un shiny Meditite'},
  m_safari:     {name: '🎲 De vida o muerte', info: 'Has capturado un shiny en la Zona Safari'},
  m_swarm:      {name: '🗺️ Tour por el mundo', info: 'Has obtenido un shiny de swarm'},
  m_dead:       {name: '💔 Desafortunado', info: 'Has perdido un shiny durante un encuentro'},
  m_secret:     {name: '🌟 Top secret', info: 'Has obtenido un shiny secret (salvaje)'},
  m_shunter:    {name: '📆 Shunter del mes', info: 'Has obtenido la mayor puntuación de shinys en un mes'},
  m_pescador:   {name: '🎣 Maestro pescador', info: 'Has obtenido un shiny pescando'},
  m_cardumen:   {name: '🐟 Cardumen', info: 'Has obtenido 3 shiny pescando (Sin repetir especies)'},
  m_raceW:      {name: '🥇 Race winner', info: 'Has ganado una shiny race'},
  m_raceL:      {name: '🥈 Fail race', info: 'Has obtenido una fase buscando el shiny de la race'},
  m_suertudo:   {name: '🍀 Suertudo', info: 'Has obtenido 2 o mas shiny en 1 día (24h o menos)'},
  m_racha:      {name: '💫 Enrachado', info: 'Has obtenido un shiny en 3 o mas días seguidos'},
  m_sequia:     {name: '💯 Aferrado', info: 'Has obtenido un shiny después de los 100k de encuentros'},
  m_elegido:    {name: '🛐 El elegido', info: 'Has obtenido un shiny alpha o legendario'},
  m_rare:       {name: '🎩 Hat Trick', info: 'Has obtenido 3 shiny \"rare\"'},
  m_abuelo:     {name: '👴 Paciencia de abuelo', info: 'Has obtenido 3 o mas fases buscando un shiny'},
  m_huevo:      {name: '🥚 Raza perfecta', info: 'Has obtenido un shiny por crianza'},
  m_misterio:   {name: '❔ Misterio resuelto', info: 'Has obtenido un shiny de una Ball Misteriosa'},
  m_fosil:      {name: '🦖 Arqueólogo', info: 'Has obtenido un fósil shiny'},
  m_arbol:      {name: '🌳 Arborista', info: 'Has obtenido un shiny de golpe cabeza/árbol de miel'},
  m_mundo:      {name: '🌎 Trotamundos', info:'Has obtenido un mínimo de 3 shiny de cada región (Sin repetir especies)'},
  m_goldenbox:  {name: '📦 Golden box', info: 'Has obtenido una caja llena (60) de shinys'},
  m_raza:       {name: '🧬 Maestro de raza', info: 'Posees la línea evolutiva completa de un shiny (Solo Pokémon que puedan evolucionar)'},
  m_pecador:    {name: '👿 Pecador', info: 'Has vendido, liberado o regalado un shiny'},
  m_cintas:     {name: '🎀 Shiny completo', info: 'Has obtenido un shiny que posee todas las cintas'},
  m_apostol:    {name: '📝 Apóstol', info: 'Has registrado una nueva especie en la Shiny Dex de MeD'},
  m_pvp:        {name: '🎫 Built different', info: 'Has obtenido un shiny ganando un torneo o evento oficial'},
  m_supremacy1: {name: '🌱 MeD Supremacy 1', info: 'Formaste parte del equipo ganador de la MeD Supremacy 1'},
  m_olimpiadas: {name: '🏆 Winners PokeLympics 2024', info: 'Formaste parte del equipo ganador de las PokeLympics 2024'},
  m_supremacy2: {name: '🅿️ MeD Supremacy 2', info: 'Formaste parte del equipo ganador de la MeD Supremacy 2'},
  m_supremacy3: {name: '🎄 MeD Supremacy 3', info: 'Formaste parte del equipo ganador de la MeD Supremacy 3'},
  m_aniMeD2025: {name: '🎉 AniMeDsario 2', info: 'Formaste parte de los ganadores del evento del AniMeDsario 2025'},
  m_aniMeD2026: {name: '🎉 AniMeDsario 3', info: 'Formaste parte de los ganadores del evento del AniMeDsario 2026'},
  m_shinywar:   {name: '🆖 Shiny War \"OG vs NG\"', info: 'Formaste parte del equipo ganador de la Shiny War \"Old Gen vs New Gen\"'},
  
};

function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
}

const response = await fetch('../data/member_info.json');
export const memberData = await response.json();