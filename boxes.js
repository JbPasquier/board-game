import Event from './event';

class Boxes {
  constructor(position, otherBoxes, specials) {
    this.event = new Event("");
    this.boxes = otherBoxes;
    this.state = false;
    this.position = position;
    this.freeSpecials = specials;
    this.setType();
  }
  setType() {
    switch (this.position) {
      case 0:
        this.event = new Event("start");
        break;
      case 4:
      case 7:
      case 12:
      case 17:
      case 22:
        this.event = new Event("door");
        break;
      case 24:
        this.event = new Event("finish");
        break;
    }
  }
  setSpecial() {
    let blocks = ["skull", "shield", "roller", "lightning"];
    if (this.event.type == "" && this.freeSpecials.length > 0) {
      if (
        blocks.indexOf(this.boxes[this.position - 1].event.type) === -1 &&
        blocks.indexOf(this.boxes[this.position + 1].event.type) === -1
      ) {
        let spec = Math.floor(Math.random() * this.freeSpecials.length);
        this.event = this.freeSpecials[spec];
        this.freeSpecials.splice(spec, 1);
      }
    }
  }
}

module.exports = Boxes;
