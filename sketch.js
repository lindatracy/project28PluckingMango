
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;
var boy,boyImage;
function preload()
{
	boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);
   
	engine = Engine.create();
	world = engine.world;

  
  
	//Create the Bodies Here.
    ground=new Ground();
	tree=new Tree();
    mango1=new Mango(540,180);
	mango2=new Mango(571,266);
	mango3=new Mango(508,326); 
	mango4=new Mango(669,338);
    mango5=new Mango(710,298);
	mango6=new Mango(650,220);
    mango7=new Mango(639,130);
    
    stone=new Stone();

    chain=new Chain(stone.body,{x:135,y:528});
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1300,
          height: 600,
          wireframes: false
        }
      });

	Engine.run(engine);
    Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  text("Press SPACE to get more chances",300,100);
  image(boyImage,100,450,200,300);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  chain.display();
  collisonDetection(mango1,stone)
  collisonDetection(mango2,stone)
  collisonDetection(mango3,stone)
  collisonDetection(mango4,stone)
  collisonDetection(mango5,stone)
  collisonDetection(mango6,stone)
  collisonDetection(mango7,stone)
 // fill(255)
 // text(mouseX+","+mouseY,mouseX,mouseY);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}
function collisonDetection(lmango,lstone){
    mangoPos=lmango.body.position;
    stonePos=lstone.body.position;
    var distance=dist(mangoPos.x,mangoPos.y,stonePos.x,stonePos.y);
    //console.log(lmango.radius+lstone.radius)
    if(distance<=lmango.radius+lstone.radius){
        Matter.Body.setStatic(lmango.body,false);
    }
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(stone.body,{x:135,y:528})
        chain.attach(stone.body);
    }
}