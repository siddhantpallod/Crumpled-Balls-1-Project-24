const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	boxDown = createSprite(1000,550,200,20);
	boxLeft = createSprite(900,510,20,100);
	boxRight = createSprite(1100,510,20,100);

	boxDown.shapeColor = "white";
	boxLeft.shapeColor = "white";
	boxRight.shapeColor = "white";


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	paper1 = new Paper(200,200);

	ground = new Ground();
	

	boxDbody = Bodies.rectangle(1000,550,200,20,{isStatic : true});
	boxLbody = Bodies.rectangle(900,510,20,100,{isStatic : true});
	boxRbody = Bodies.rectangle(1100,510,20,100,{isStatic : true});

	World.add(world,boxDbody);
	World.add(world,boxLbody);
	World.add(world,boxRbody);
  
	

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
	
  paper1.display();
  ground.display();
  drawSprites();

  
}


function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper1.body,paper1.position,{x:20,y:-15});	
	}
}



