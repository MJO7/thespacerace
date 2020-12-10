var database;
var car1, car2, car3, car4, cars;
var car1Img, car2Img, car3Img, car4Img, groundImg, trackImg;
var game, player, form, playerCount;
var allPlayers;
var gameState = 0;

function preload() {
  car1Img = loadImage("images/spaceship.png");
  car2Img = loadImage("images/spaceship 2.png");
  car3Img = loadImage("images/spaceship 3.png");
  car4Img = loadImage("images/spaceship 4.png");
  groundImg = loadImage("images/ground.png");
  trackImg = loadImage("images/track3.png");
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("white");
  if (playerCount === 4) {
    game.updateState(1);
  }
  if (gameState === 1) {
    game.play();
  }
}
