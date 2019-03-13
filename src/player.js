export class Player {
  constructor(name) {
    this.name = name;
    this.earth = 0;
    this.water = 0;
    this.fire = 0;
    this.wild = 0;
    this.active = false;
  }

  collectResources(resource, qty) {

    if(resource == "assets/images/fire.gif") {
      this.fire += qty;
    } else if(resource == "assets/images/water.gif") {
      this.water += qty;
    } else if (resource == "assets/images/earth.png") {
      this.earth += qty;
    } else if (resource == "assets/images/wild.png") {
      this.wild += qty;
    }
    console.log(this);
  }

}
