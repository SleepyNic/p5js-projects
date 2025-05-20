let boxSize = 80;

let posX = 123;
let posY = 234

let vitX = 2;
let vitY = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255,150,255,2);
  fill(0,255,150);
  square(posX,posY,boxSize)
  posX += vitX;
  posY += vitY;
  
  print(vitX);
  
  if(posX + boxSize > width || posX < 0 ){
    vitX *= -1;
  }
    if(posY + boxSize > height || posY < 0 ){
    vitY *= -1;
  }
}
  function keyPressed(){
  if( key == "s" ){
     save("drawing.jpg");
  }
}  
