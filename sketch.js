var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,weight;

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
	var canvas=createCanvas(800, 700);
	
	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("green");


	engine = Engine.create();
	world = engine.world;

	var packageBody_obstacles = {
		isStatic: false,
		restitution:0.7
	}
	
	packageBody = Bodies.circle(400,270, 5 ,packageBody_obstacles);
	World.add(world, packageBody);
	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

    ellipseMode(CENTER);
    ellipse(packageBody.position.x,packageBody.position.y,200,5);

	
	
  drawSprites();
 
}

//function keyPressed(){
	//if (keyWentDown === ("down")) {
	///	Matter.Body.setStatic(packageBody,false);
	//}
	
	
//}


