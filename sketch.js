  const Engine = Matter.Engine
  const World = Matter.World
  const Events = Matter.Events
  const Bodies = Matter.Bodies
 
    var engine,world ;    
    var divisions = []
    var particle;
    var particles = [particle]
    var plinkos = [];
    var line;

var divisionHeight=300;

var gameState = "PLAY"
var score =0;
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  
  textSize(35)
  text("Score : "+score,20,40);
  fill("white")
 
  text("500",5,550)
  text("500",80,550)
  text("500",160,550)
  text("500",240,550)

  text("100",320,550)
  text("100",400,550)
  text("100",480,550)

  text("200",568,550)
  text("200",648,550)
  text("200",720,550)

  ground.display();

  if(gameState=="END")
  {
    background= "black"
    fill("red")
    textSize(100)
    text("Game Over",200,400)
  }

  
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

if(particle!=null)
{
  particle.display();
}