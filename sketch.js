var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;


function preload()
{
	
}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = Bodies.rectangle(0,350,600,20);
  World.add(world,ground);
  var paper_options = {
    isStatic : false,
    restitution: 0.3,
    friction:0.5,
    density : 1.2
  }
  paper = Bodies.circle(50,340,10,paper_options);
  World.add(world,paper);
	ellipseMode(RADIUS);
  Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);

  
  rectMode(CORNER);
  fill("yellow");
  rect(0,350,600,20);
  
  rectMode(CORNER);
  fill("white");
  rect(400,341,100,10);
  rect(400,241,10,100);
  rect(490,241,10,100);
  ellipse(paper.position.x,paper.position.y,10);
  paper.collide(ground);
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Body.applyForce(paper,{x:0,y:0},{x:85,y:0.-85});
  }
}
