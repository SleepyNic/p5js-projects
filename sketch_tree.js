function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  stroke(0);
  
  // Map mouseX to an angle between 0 and 60 degrees
  let angle = map(mouseX, 0, width, 0, 60);

  // Map mouseY to a branch scale between 0.5 (shorter) and 0.8 (longer)
  let scaleFactor = map(mouseY, 0, height, 0.5, 0.8);

  translate(width / 2, height);
  drawTree(100, angle, scaleFactor);
}

function drawTree(branchLength, angle, scaleFactor) {
  line(0, 0, 0, -branchLength);
  translate(0, -branchLength);

  if (branchLength > 8) {
    // Right branch
    push();
    rotate(angle);
    drawTree(branchLength * scaleFactor, angle, scaleFactor);
    pop();

    // Left branch
    push();
    rotate(-angle);
    drawTree(branchLength * scaleFactor, angle, scaleFactor);
    pop();
  }
}

function keyPressed(){
  if( key == "s" ){
     save("drawing.png");
  }
}
