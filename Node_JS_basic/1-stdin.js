// Afficher la question d’accueil :
console.log("Welcome to Holberton School, what is your name?\n")

// Préparer l’"écoute" sur l’entrée standard
process.stdin.setEncoding("utf8");   // lire du texte et pas des buffers
let closed = false;
const closeOnce = () => {
  if (!closed) {
    closed = true;
    process.stdout.write('This important software is now closing\n');
  }
};

// Afficher le nom à la première ligne saisie
process.stdin.once('data', (data) => {
  const name = data.trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

// Message de fermeture quand le flux se termine (EOF: pipe / Ctrl+D)
process.stdin.on('end', closeOnce);

// Message de fermeture propre si Ctrl+C
process.on('SIGINT', () => {
  closeOnce();
  process.exit(0);
});
