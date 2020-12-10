class Player {
  constructor() {
    this.index = null;
    this.distance = 0;
    this.name = null;
  }
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    });
  }
  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
  }
  update() {
    var PlayerIndex = "players/player" + this.index;
    database.ref(PlayerIndex).set({
      name: this.name,
      distance: this.distance,
    });
  }
  static getPlayerinfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    });
  }
}
