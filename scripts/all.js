console.log("acá va ir todo lo que se use en todas las paginas");

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Mejor Apostol
function getTop(capturedBy) {
  const counts = {};

  for (const name in capturedBy) {
      const trainer = capturedBy[name];
      counts[trainer] = (counts[trainer] || 0) + 1;
  }

  let maxCount = 0;
  let topTrainer = "";

  for (const trainer in counts) {
      if (counts[trainer] > maxCount) {
          maxCount = counts[trainer];
          topTrainer = trainer;
      }
  }

  return { trainer: topTrainer, count: maxCount };
}