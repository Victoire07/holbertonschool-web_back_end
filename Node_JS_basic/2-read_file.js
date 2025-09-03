const fs = require('fs');
function countStudents(path) {
  try {
    const content = fs.readFileSync(path, 'utf8');
    const lines = content.split('\n'); // divise le contenu du CSV en un tableau de lignes
    for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim();

  if (line === '') {
    continue; // ignore les lignes vides
  }

  // ici tu mettras l'étape 4 (split en colonnes, etc.)
}

  }
  catch {
    throw new Error ('Cannot load the database')
  }
    
}
module.exports = countStudents;
