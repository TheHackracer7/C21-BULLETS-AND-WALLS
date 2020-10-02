var bullet,wall,speed,weight,damage,thickness;


function setup() {

  createCanvas(1600,400);
  thickness=random(22,83);
  wall=createSprite(1500,200,thickness,thickness/2);
  bullet=createSprite(20, 200, 20, 20);
  speed=random(45,60);
  weight=random(1533,2260);
  damage=(weight*Math.pow(speed,2))/(Math.pow(thickness,3));
 
}

function draw() {
  background("black");
  wall.shapeColor="white" ;
  bullet.shapeColor="white" ;
  bullet.velocityX=speed;

  console.log(damage);

if(collided(wall,bullet))
{
  bullet.velocityX=0;


if(damage>=0 && damage<=3.68)
{

wall.shapeColor="green";



}
else if(damage>3.68 && damage<=12.43)
{


  wall.shapeColor="red";




}
else
{


  wall.shapeColor="green";



}



  }
  else
  {


    bullet.velocityX=speed;


  }
  drawSprites();
}

