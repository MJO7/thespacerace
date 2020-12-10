class Form {
  constructor() {
    this.title = createElement("H2");
    this.input = createInput();
    this.button = createButton("Play");
    this.greeting = createElement("H3");
  }
  display() {
    this.title.html("THE SPACE RACE");
    this.title.position(500, 100);
    this.input.position(500, 200);
    this.button.position(500, 300);
    this.button.style("background", "yellow");
    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.updateCount(playerCount);
      player.update();
      this.greeting.html("WELCOME TO THE RACE , " + player.name);
      this.greeting.position(500, 200);
    });
    var button2 = createButton("Reset");
    button2.position(10, 10);
    button2.mousePressed(function () {
      game.updateState(0);
      player.updateCount(0);
      database.ref("/").update({
        players: null,
      });
    });
  }
  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
}
