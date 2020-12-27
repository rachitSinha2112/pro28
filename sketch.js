
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

ground1=new Ground(10,690,3000,10);	
boy1=new Boy(200,630,80,140);
tree1=new Tree(1000,400,700,500);
stone=new Stone();
sling1=new sling(stone.body,{x:200,y:600});

mango1=new Mango(1000,100,40);
mango2=new Mango(1100,200,40); 
mango3=new Mango(1010,300,40);
mango4=new Mango(1030,250,40);
mango5=new Mango(1040,150,40);
mango6=new Mango(1100,350,40);
mango7=new Mango(1000,280,40);
mango8=new Mango(1200,300,40);
mango9=new Mango(1010,350,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER); 
  background(225);
  
  drawSprites();



  boy1.display();

  ground1.display();

  tree1.display();

  stone.display();

  sling1.display();

  mango2.display();
  mango1.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display(); 
  mango8.display();
  mango9.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling1.fly();
}


