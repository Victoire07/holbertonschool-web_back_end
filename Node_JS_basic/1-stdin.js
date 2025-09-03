// Afficher la question d’accueil :
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Préparer l’"écoute" sur l’entrée standard
process.stdin.setEncoding('utf8');

// Pour afficher le nom que 1 seule fois
let printed = false;

// Quand une ligne arrive, afficher "Your name is: ..."
process.stdin.on('data', (chunk) => {
  if (!printed) {
    const name = chunk.trim();
    process.stdout.write(`Your name is: ${name}\n`);
    printed = true;
  }
});

// À la fin du flux (EOF: pipe/CTRL+D), afficher le message de fermeture
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
