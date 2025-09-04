// importe le module http
http=require("http");

// créer serveur avec fonction callback
app=http.createServer(callback);

app.on("request", (req, res) => {
  res.write("Hello Holberton School")

})

// lance le serveur sur le port ici 1245
app.listen(1245, () => {
  console.log("Hello Holberton School")

})

module.exports = app;
