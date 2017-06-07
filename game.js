class Game {
  constructor(board, players, dice) {
    this.board = board;
    this.players = players;
    this.dice = dice;
    this.initiative;
  }
  event() {
    let action = this.board.boxes[
      this.players[this.initiative].position
    ].event.activate();
    if (action[0] == "move") {
      this.players[this.initiative].move(action[1]);
    } else if (action[0] == "flag") {
      if (
        this.players[this.initiative].hasFlag("protected") &&
        action[1] == "skull"
      ) {
        this.players[this.initiative].unsetFlag("protected");
      } else if (
        this.players[this.initiative].hasFlag("protected") &&
        action[1] == "pass"
      ) {
        this.players[this.initiative].unsetFlag("protected");
      } else {
        this.players[this.initiative].setFlag(action[1]);
      }
    }
  }
  play() {
    let roll = this.dice.roll();
    this.initiative = Number(!this.players[0].initiative);
    if (this.players[this.initiative].hasFlag("pass")) {
      this.players[this.initiative].unsetFlag("pass");
    } else {
      this.players[this.initiative].move(roll);
      this.event();
      this.players[Number(!this.initiative)].initiative = true;
    }
  }
}

module.exports = Game;
