var car, wall;
var speed, weight;
var damage;

function setup() 
{
  createCanvas(800,400);
   
  car = createSprite(100, 200, 50, 50);
  car.shapeColor = "white";
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
  
  wall = createSprite(700,200,60,200);
  wall.shapeColor = color(80,80,80);
}

function draw() 
{
  background(255,255,255);  

  if(wall.x-car.x < car.width/2+wall.width/2)
  {
    car.velocityX=0;

    GCSO();
  }

  drawSprites();
}

function GCSO()
{
  damage = (0.5*weight*speed*speed)/22500;
  
  if(damage < 100)
  {
    car.shapeColor = "green";
  }

  else if( damage>100 && damage<180 )
  {
    car.shapeColor = "yellow";
  }

  else if(damage > 180)
  {
    car.shapeColor = "red";
  }
}
/*function draw() 
{
  background(255,255,255);  

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 
    && fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2 
    && fixedrect.y-movingrect.y < movingrect.height/2+fixedrect.height/2)
  {
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }

  else
  {
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }

  drawSprites();
}*/