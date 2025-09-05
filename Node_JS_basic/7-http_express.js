const express = require('express');

// création d'1 instance d’application
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

  // (on mettra la lecture + formatage ici à l’étape 3)
});

app.listen(1245);

module.exports = app;
