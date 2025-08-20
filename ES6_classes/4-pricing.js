import Currency from '3-currency'

export default class Pricing {
  constructor(amount, currency) {
     if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof currency !== '') {
      throw new TypeError('')
    }

    this._amount = amount;
    this._currency = currency;
  }

// Getter and Setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  displayFullPrice() {
    return `${this._amount}`;
  }
}
