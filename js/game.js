class Game {
  constructor() {}
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }
  updateState(state) {
    database.ref("/").update({
      gameState: state,
    });
  }
  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }

      form = new Form();
      form.display();
    }
    car1 = createSprite(100, 200);
    car1.addImage("car1Img", car1Img);
    car2 = createSprite(300, 200);
    car2.addImage("car2Img", car2Img);
    car3 = createSprite(500, 200);
    car3.addImage("car3Img", car3Img);
    car4 = createSprite(700, 200);
    car4.addImage("car4Img", car4Img);
    cars = [car1, car2, car3, car4];
  }

  play() {
    form.hide();
    Player.getPlayerinfo();
    if (allPlayers !== undefined) {
      image(trackImg, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
      //var ypos = 140;
      var x = 200;
      var y;
      var index = 0;
      for (var plr in allPlayers) {
        index = index + 1;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        if (index === player.index) {
          cars[index - 1].shapeColor = "green";
          stroke(10);
          fill("black");
          ellipse(x, y, 120, 120);
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y;
        }
        //if (plr === "player" + player.index) {
        //fill("red");
        //} else {
        //   fill("black");
        // }
        // ypos += 20;
        // textSize(15);
        // text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, ypos);
      }
    }
    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 50;
      player.update();
    }
    if (player.distance > 3860) {
      gameState = 2;
      textSize(50);
      text("Fin.", 200, 200);
    }
    drawSprites();
  }
  end() {
    console.log("Game Ended");
    game.update(2);
  }
}
