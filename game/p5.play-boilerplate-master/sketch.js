var backgroundImage,ground
function preload(){
backgroundImage=loadImage("images/baground.png")
}
function setup() {
  createCanvas(1200,700);
 ground= createSprite(600, 350, 1200, 900);
 ground.addImage(backgroundImage)
 ground.velocityX=-4
 ground.scale=1.5
}

function draw() {
  background(0);  
  if(ground.x<400){
ground.x=700
  }
  drawSprites();
}