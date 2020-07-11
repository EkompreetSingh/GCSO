var car,wall,speed,weight;
function setup() {
 
  createCanvas(1600,400);
  car=createSprite(100, 200, 20, 10);
  car.shapeColor="white";

  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor="grey";

  speed=random (55,90);
  weight=random (400,1500);

  car.velocityX=speed;


 
}

function draw() {
  background(0);  
  var deformation = (0.5*weight*speed*speed)/22500;
  if (car.collide(wall)) {
    car.velocityX=0;
    if (deformation <100) {
      car.shapeColor= "green";
    }
    else if (deformation>100&&deformation <180 ){
      car.shapeColor= "yellow";
    }
  else  if (deformation >180) {
      car.shapeColor= "red";
    }
  }
  drawSprites();
}