const fs = require('fs');
const http = require('http');

function buildStudentsReport(dbPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Nettoyage des lignes (ignore les lignes vides en fin de fichier)
      const lines = data
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l !== '');

      if (lines.length === 0) {
        // Pas d’en-tête, pas de données
        resolve(['Number of students: 0']);
        return;
      }

      // Retire l'en-tête
      const header = lines.shift(); // eslint-disable-line no-unused-vars

      const groups = {};
      let total = 0;

      for (const line of lines) {
        const parts = line.split(',');
        if (parts.length >= 4) {
          const firstname = parts[0].trim();
          const field = parts[3].trim();
          if (firstname && field) {
            if (!groups[field]) groups[field] = [];
            groups[field].push(firstname);
            total += 1;
          }
        }
      }

      const out = [];
      out.push(`Number of students: ${total}`);

      // Garder l’ordre d’apparition des filières (comme dans le CSV)
      Object.keys(groups).forEach((field) => {
        const list = groups[field];
        out.push(
          `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
        );
      });

      resolve(out);
    });
  });
}

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    const dbPath = process.argv[2];
    res.statusCode = 200;
    res.write('This is the list of our students\n');

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
    return;
  }

  // Routes non spécifiées
  res.statusCode = 404;
  res.end('Not found');
});

// lance le serveur sur le port ici 1245
app.listen(1245);
