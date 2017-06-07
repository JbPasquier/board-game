class Dice {
  constructor() {
    this.values = [1, 2, 3, 4];
    this.value = 1;
  }
  roll() {
    return this.values[Math.floor(Math.random() * this.values.length)];
  }
}

module.exports = Dice;
