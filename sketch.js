
var fixedRect , movingRect;

function setup() {

  createCanvas(800,800);
  

  movingRect = createSprite(200,400 ,100,100); //25
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect = createSprite(400,400,140,90); //75
  fixedRect.shapeColor ="green";
  fixedRect.debug = true;

}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

console.log(fixedRect.y- movingRect.y);

isTouching();

  drawSprites();
}

