function setup() {
  createCanvas(windowWidth, windowHeight);

background(200,0,200)
}

let taille = 65

function draw() {
  square(mouseX,mouseY,taille)
  taille = taille + 2
}

function keyPressed(){
  if( key == "s" ){
     save("drawing.png");   
  }
}