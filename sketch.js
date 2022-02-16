const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, backgroundImg;

var tower, ground, cannon;
var angle = 70;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  ground = Bodies.rectangle(0, height - 1, width*2, 1, {isStatic:true});
  World.add(world, ground);

  tower = Bodies.rectangle(80, 200, 160, 310, {isStatic:true});
  World.add(world, tower);

  cannon = new Cannon (95, 60, 130, 110, angle);
  
}

function draw() {

  image(backgroundImg, 0, 0, 1200, 600);
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width*2, 1);

  image(towerImage, tower.position.x, tower.position.y, 160, 310);

  cannon.display();
}