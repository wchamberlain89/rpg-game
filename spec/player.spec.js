import { Player } from './../src/player.js';


describe("refresh resources: ", function() {
  let player = new Player();

  it("Player will have 1 fire resource", function() {
    player.collectResources('assets/images/fire.gif', 1);
    
    expect(player.fire).toEqual(1);
  });
  it("Player will have 2 water resources", function() {
    player.collectResources("assets/images/water.gif", 2);

    expect(player.water).toEqual(2);
  });
  it("Player will have 20000 Earth Resources", function() {

      player.collectResources("assets/images/earth.png", 20000);

    expect(player.earth).toEqual(20000);
  });
  it("Player will have 20000000 wild cards", function() {

      player.collectResources("assets/images/wild.png", 20000000);

    expect(player.wild).toEqual(20000000);
  })

});
