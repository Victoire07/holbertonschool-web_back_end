const countStudents = require('./3-read_file_async');
const http = require('http');

const app = http.createServer((req, res) => {
});

// lance le serveur sur le port ici 1245
app.listen(1245);
