export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
        throw new TypeError ('sqft must be a number')
    }
    this._sqft = sqft;
  }
  // getter pour sqft :
  get sqft() {
    return this._sqft;
  }
  // Methode 'evacuationWarningMessage'
  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
