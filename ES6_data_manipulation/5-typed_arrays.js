export default function createInt8TypedArray(length, position, value) {
  // Étape 1 -> Créer le buffer
  const buffer = new ArrayBuffer(length);

  // Étape n°2 -> Vérification de la position
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Étape n3 -> Création d'un dataview basé sur ce buffer
  const dataView = new DataView(buffer);

  // Étape 4 -> ecrire la valeur
  dataView.setInt8(position, value);

  // Étape n5 -> Retourner le dataview

  return dataView;
}
