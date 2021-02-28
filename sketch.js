var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	 box1 = new Box(200,100,50,50);
     box2 = new Box(200,50,50,100);
	 ground  = new Ground(200,390,400,20);



	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  
  drawSprites();
  
  
 
}
