import { Player } from './../src/player.js';


describe("refresh resources: ", function() {
  let player = new Player();

  it("Player will have 1 fire resource", function() {
    player.collectResources('assets/images/fire.gif')
    expect(player.fire).toEqual(1);
  });
  it("Player will have 2 water resources", function() {
    player.collectResources("assets/images/water.gif");
    player.collectResources("assets/images/water.gif");
    expect(player.water).toEqual(2);
  });
  it("Player will have 20000 Earth Resources", function() {
    for(var i = 0; i < 20000; i++) {
      player.collectResources("assets/images/earth.png");
    }
    expect(player.earth).toEqual(20000);
  });
  it("Player will have 20000000 wild cards", function() {
    for(var i = 0; i < 20000000; i++) {
      player.collectResources("assets/images/wild.png");
    }
    expect(player.wild).toEqual(20000000);
  })

});
