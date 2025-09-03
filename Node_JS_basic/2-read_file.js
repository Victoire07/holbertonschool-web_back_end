const fs = require('fs');

function countStudents(path) {
  try {
    const content = fs.readFileSync(path, 'utf8');
    const lines = content.split('\n'); // divise le contenu du CSV en un tableau de lignes

    const groups = {};
    let total = 0;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line === '') {
        continue;
      }

      const parts = line.split(',');
      if (parts.length < 4) {
        continue;
      }

      const firstname = parts[0].trim(); // colonne 0
      const field = parts[3].trim();// colonne 3

      if (!groups[field]) {
        groups[field] = [];
      }

      groups[field].push(firstname);
      total += 1;
    }

    console.log(`Number of students: ${total}`);

    for (const [fieldName, list] of Object.entries(groups)) {
      console.log(`Number of students in ${fieldName}: ${list.length}. List: ${list.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
