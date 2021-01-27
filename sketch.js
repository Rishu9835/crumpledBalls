
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,bin,binImg	
var world;
function preload(){
	binImg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	bin = createSprite(900,540,20,20);
	bin.addImage(binImg);
	bin.scale=0.85;


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(900,650);
	paper=new Paper(200,665,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  

  groundObject.display();
  dustbinObj.display();
  paper.display();
  drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position ,{x:45,y:-45});
}
}
