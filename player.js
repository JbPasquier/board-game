class Player {
  constructor(name, initiative) {
    this.initiative = initiative;
    this.position = 0;
    this.flags = [];
    this.name = name;
  }
  move(steps) {
    this.position += steps;
    this.initiative = false;
  }
  hasFlag(flag) {
    return this.flags.indexOf(flag) !== -1;
  }
  setFlag(flag) {
    this.flags.push(flag);
  }
  unsetFlag(flag) {
    this.flags.splice(this.flags.indexOf(flag), 1);
  }
}

module.exports = Player;
