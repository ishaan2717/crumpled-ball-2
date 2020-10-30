
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin1,dustbin2,dutbin3;
var paper;
var dustbinimage;
function preload()
{
	dustbinimage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 paper = new Paper(50,600,35);
	 ground = new Ground(400,680,800,15);
	 dustbin1 = new Dustbin(600,630,10,60);
	 dustbin2 = new Dustbin(640,665,90,10);
	 dustbin3 = new Dustbin(680,630,10,60);

	Engine.run(engine);
  
}


function draw() {
  background("white");
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  imageMode(CENTER);
  image(dustbinimage,640,630,90,75
	);
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:110,y:-120});
	}
}



