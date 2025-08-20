export default class SkyHighBuilding {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string')
    }
    if (typeof code !== 'string') {
        throw new TypeError('code must be a string')
    }

    this._name = name;
    this._code = code;
  }
}
