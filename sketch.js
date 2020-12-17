var helicopterIMG, helicopterSprite;
var packageSprite,packageIMG;
var packageBody,ground;
var city , cityIMG;
var place1 , place2 , place3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	cityIMG=loadImage("1.jpg");
}

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);
	
	city=createSprite(750,350,800,700);
	city.addImage(cityIMG);
	city.scale=0.8;
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	var place1 = new place(750,height-50,200,20);
	var place2 = new place(650,height-150,20,200);
	var place3 = new place(850,height-150,20,200);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  place1.display();
  place2.display();
  place3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);}
}