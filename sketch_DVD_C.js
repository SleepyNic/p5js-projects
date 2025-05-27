let boxSize = 80;

let posX = 123;
let posY = 234

let vitX = 2;
let vitY = 4;

let radius = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,200,150);
  fill(0,255,150);
  square(posX,posY,boxSize,radius)
  posX += vitX;
  posY += vitY;
  
  print(vitX);
  
  if(posX + boxSize > width || posX < 0 ){
    vitX *= -1;
    radius =random(0,50);
  }
    if(posY + boxSize > height || posY < 0 ){
    vitY *= -1;
        radius =random(0,50);
  }
}
  function keyPressed(){
  if( key == "s" ){
     save("drawing.jpg");
  }
}  
