const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      // si la lecture échoue → on rejette la promesse avec le message exact
      if (err) {
        reject(new Error('Cannot load the database'));
        return;// on sort pr éviter de continuer
      }

      const lines = data.split('\n');//découpe les lines

      const groups = {};//stocker les étudiants par catég
      let total = 0;//compteur

      for (let index = 1; index < lines.length; index+=1) {
        const line = lines[index].trim();

        if (line !== '') {
          const parts = line.split(',');
        
        if (parts.length >= 4) {
          const firstname = parts[0].trim(); // colonne 0
          const field = parts[3].trim();// colonne 3

          if (!groups[field]) {
            groups[field] = [];
          }
          groups[field].push(firstname);
          total += 1;
        }
      }
    }
     // affichages au format exact
      console.log(`Number of students: ${total}`);
      for (const [fieldName, list] of Object.entries(groups)) {
        console.log(`Number of students in ${fieldName}: ${list.length}. List: ${list.join(', ')}`);
      }

      // succès : on résout la promesse (le main affichera "Done!")
      resolve();
    });
  });
}

module.exports = countStudents;
