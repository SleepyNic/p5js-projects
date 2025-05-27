let posX = 0;
let posY = 0;
let eyeSize = 250;
let pupilSize = 50;
let maxDis;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  posX = windowWidth/2;
  posY = windowHeight/2;
  maxDis= (eyeSize - pupilSize)/2;
}

function draw() {
  
  background(220);
  fill(255)
  strokeWeight(10)
  circle(windowWidth/2,windowHeight/2,eyeSize)
  
  
  let lookX = posX + (mouseX - posX) * 0.2;
  let lookY = posY + (mouseY - posY) * 0.2;
  
  fill(000)
  circle(lookX,lookY,pupilSize)
}
