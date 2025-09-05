// Importer le module fs en mode promesse
const fs = require('fs').promises;

// Définir la fonction readDatabase
function readDatabase(filePath) {
  // Retourner une promesse (car lecture asynchrone)
  return new Promise(async (resolve, reject) => {
    try {
      // 1. Lire le fichier en UTF-8
      const data = await fs.readFile(filePath, 'utf8');

      // 2. Découper les lignes du CSV
      const lines = data.trim().split('\n');

      // 3. Récupérer l'entête (première ligne)
      const header = lines[0].split(',');

      // 4. Trouver la position des colonnes firstname et field
      const idxFirstname = header.indexOf('firstname');
      const idxField = header.indexOf('field');

      // 5. Créer un objet pour stocker les résultats
      const result = {};

      // 6. Boucler sur chaque étudiant (à partir de la ligne 1)
      for (let i = 1; i < lines.length; i += 1) {
        // Découper chaque ligne
        const row = lines[i].split(',');

        // Récupérer firstname et field
        const firstname = row[idxFirstname].trim();
        const field = row[idxField].trim();

        // Ajouter le prénom dans le bon tableau (selon le field)
        if (!result[field]) {
          result[field] = [];
        }
        result[field].push(firstname);
      }

      // 7. Retourner l'objet final
      resolve(result);

    } catch (error) {
      // En cas d'erreur (fichier introuvable par ex)
      reject(new Error('Cannot load the database'));
    }
  });
}

// Exporter la fonction pour l'utiliser ailleurs
module.exports = readDatabase;
