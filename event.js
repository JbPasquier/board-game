class Event {
  constructor(type) {
    this.type = type;
  }
  activate() {
    switch (this.type) {
      case "skull":
        return ["flag", "skull"];
      case "shield":
        return ["flag", "protected"];
      case "roller":
        return ["move", 1];
      case "lightning":
        return ["flag", "pass"];
      case "door":
        // Event question
        break;
      case "finish":
        // Event fin
        break;
    }
    return [false, false];
  }
}

module.exports = Event;
