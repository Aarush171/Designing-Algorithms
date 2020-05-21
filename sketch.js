var fixedRect, movingRect; 

function setup() {
  createCanvas(1200,800); 

  fixedRect = createSprite(200, 200, 50, 80); 
  fixedRect.shapeColor = "green";
  fixedRect.debug = true; 
  fixedRect.velocityX = 4;

  movingRect =createSprite(600,200,80,30); 
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = -4;
} 

function draw() { 
  background(0);

  //movingRect.y = World.mouseY;
  //movingRect.x = World.mouseX; 

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x <= movingRect.width/2+ fixedRect.width/2
    && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor ="red"; 
    fixedRect.shapeColor = "red";
    movingRect.velocityX = -(movingRect.velocityX);
    fixedRect.velocityX = fixedRect.velocityX * -1;
  } else { 
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  } 

  drawSprites(); 
}