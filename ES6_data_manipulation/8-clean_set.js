export default function cleanSet(set, startString) {
  // 1- Si startString est vide -> retourne une chaîne vide
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
} 

  // 2- Créer un tableau pour stocker les morceaux valides
  const result = [];

  // 3- Parcourir toutes les valeurs du set
  for (const value of set) {
    // Vérifier si la valeur commence bien par startString
    if (value.startsWith(startString)) {
      // Découper la fin de la valeur après startString
      const part = value.slice(startString.length);
      // Ajouter au tableau result
      result.push(part);
    }
  }

  // 4- Retourner les morceaux assemblés avec "-"
  return result.join('-');
}
