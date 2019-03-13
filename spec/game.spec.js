import { Game } from "./../src/game.js";


describe("Resources", function(){
  let testGame = new Game();

  it("currentResources will start with no resources", function(){
    expect(testGame.currentResources.length).toEqual(0);
  });
});

describe("it will refresh to 5 resources", function() {
  let testGame2 = new Game();

  testGame2.refreshResources();
  it("Refresh resources", function() {
    expect(testGame2.currentResources.length).toEqual(5);
  });
});
