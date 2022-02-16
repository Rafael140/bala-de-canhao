class Cannon {

  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
    this.cannonBase = loadImage("./assets/cannonBase.png");
    this.cannon = loadImage("./assets/canon.png")
  }
  
  display(){

    image(this.cannon,this.x, this.y, this.width, this.height)

    image(this.cannonBase,65,30,200,200);
    noFill();
    
  }

}
