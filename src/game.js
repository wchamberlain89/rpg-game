export class Game {
  constructor() {
    this.currentResources = [];
    this.resources = [
      { element: "fire", imgSrc: "assets/images/fire.gif" },
      { element: "water", imgSrc: "assets/images/water.gif" },
      { element: "earth", imgSrc: "assets/images/earth.png" },
      { element: "wild", imgSrc: "assets/images/wild.png" }
    ];
    this.players = [];
  }

  refreshResources() {
    for(let i = 0; i <= 5; i++){
      if(this.currentResources.length < 5) {
        let random = Math.floor((Math.random() * 4));
        let newResource = this.resources[random];
        this.currentResources.push(newResource);
      }
    }
  }

  addPlayer(player) {
    this.players.push(player);
  }
  removeResources(resource) {

  }



}
