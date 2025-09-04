// importe le module http
const http=require("http");

// créer serveur avec fonction callback
const app=http.createServer(callback);

app.on("request", (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School');

});

// lance le serveur sur le port ici 1245
app.listen(1245)


module.exports = app;
