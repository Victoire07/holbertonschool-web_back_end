export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft;

  if (this.constructor !== Building &&
    this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
  }

}

  // getter pour sqft :
  get sqft() {
    return this._sqft;
  }

  // Methode 'evacuationWarningMessage'
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
