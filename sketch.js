    var bullet,wall;
    var speed,weight;
var thickness




    function setup() {
      createCanvas(1600,400);
    speed= random(223,251)
    weight = random(400,1500)
    bullet = createSprite(50,200,50,50);
    bullet.velocityX = speed
  thickness =random(30,52)
    wall = createSprite(1500,200,thickness,height/2)


    }

    function draw() {
      background(255,255,255);  
     
      
      if (hasCollided(bullet,wall)){
    bullet.velocityX = 0
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    

    if(damage > 10){
      car.shapeColor =  color (255,0,0)
    }
    if(deformation<100){
      car.shapeColor = color(0,255,0)
    }
   


      }
      drawSprites();
    }

function hasCollided(lbullet,lwall){
  bulletRightEdge= bullet .x+bullet.width;
wallLeftEdge =wall.x;
if( bulletRightEdge>=wallLeftEdge){
return true

}
return false;

}




