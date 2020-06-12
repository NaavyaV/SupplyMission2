const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, target, base;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	baseSprite=createSprite(width/2, height -50, 500,20);
	baseSprite.shapeColor=color(255, 0, 0)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 - 30 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

    target = new Target(0, 0, 10, 5, PI/2);
	

	//Create a Ground
	base = Bodies.rectangle(375, 600, 300, 20);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	World.add(world, base);

	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  target.display();
  fill('red');
  rect(500, 600, 20, 100);
  fill('red');
  rect(250, 600, 20, 100);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



