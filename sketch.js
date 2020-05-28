// Create variables
var bullet,wall;
var speed,weight,thickness;

function setup() {
  // canvas of size 1600 x 400 
  createCanvas(1600,400);

  // Set random values to the variables created
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

// creating bullet sprite and setting it equal to  the speed. 
//Color of the bullet is white and also background is white, so we cant see the bullet till it collide swith the wall
  bullet = createSprite(10,200,50,15);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  // creating wall sprite and with grey color
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(255,255,255);  
 
  // Once the bullet collides with the wall, velocity of bullet should becomes zero and 
  //the color of the bullet should change according to the damage.
if(bullet.collide(wall)){
  bullet.velocityX = 0;
  var damage = (0.5* weight*speed*speed)/(thickness*thickness*thickness);
     if(damage>10 ){
      bullet.shapeColor = color(255, 0, 0);
    }
    else {
      bullet.shapeColor = color(0, 255, 0);
    }
  }

  bullet.display();
  wall.display();
  drawSprites();
}