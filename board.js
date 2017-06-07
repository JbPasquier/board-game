import Event from './event';
import Boxes from './boxes';

class Board {
  constructor(size) {
    this.boxes = [];
    this.size = size;
    this.specials = [
      new Event("skull"),
      new Event("skull"),
      new Event("shield"),
      new Event("shield"),
      new Event("roller"),
      new Event("lightning")
    ];
  }
  build() {
    for (var i = 0; i <= this.size; i++) {
      this.boxes.push(new Boxes(i, this.boxes, this.specials));
    }
    for (i = 0; i <= this.size; i++) {
      this.boxes[i].setSpecial();
    }
  }
}

module.exports = Board;
