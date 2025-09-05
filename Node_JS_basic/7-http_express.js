// Importe le framework Express pour créer plus facilement un serveur HTTP !
const express = require('express');
// importe le module fs (API callback) pour lire le fichier CSV en asynchrone avec fs.readFile.

// Déclare une fonction qui retourne une Promesse.
function buildStudentsReport(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l !== '');

      if (lines.length <= 1) {
        resolve(['Number of students: 0']);
        return;
      }

      // On enlève l'entête
      const rows = lines.slice(1);

      // groups[field] = [prénom1, prénom2, ...]
      const groups = {};
      // ordre d'apparition des filières dans le CSV
      const order = [];
      let total = 0;

      for (const row of rows) {
        const parts = row.split(',');
        if (parts.length >= 4) {
          const firstname = parts[0].trim();
          const field = parts[3].trim();

          if (firstname && field) {
            if (!Object.prototype.hasOwnProperty.call(groups, field)) {
              groups[field] = [];
              order.push(field);
            }
            groups[field].push(firstname);
            total += 1;
          }
        }
      }

      const out = [`Number of students: ${total}`];
      for (const field of order) {
        const list = groups[field];
        out.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }

      resolve(out);
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text/plain');
  res.write('This is the list of our students\n');

  const dbPath = process.argv[2];
  if (!dbPath) {
    res.end('Cannot load the database');
    return;
  }

  buildStudentsReport(dbPath)
    .then((lines) => {
      res.end(lines.join('\n'));
    })
    .catch(() => {
      res.end('Cannot load the database');
    });
});

if (require.main === module) {
  app.listen(1245);
}

module.exports = app;
