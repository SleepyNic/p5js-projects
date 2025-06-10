let cols; let rows; 
let spacing = 5; 
let size = [];
let scl = 0.10;

function setup() {
  createCanvas(400, 400);
  cols = width/spacing;
  rows = height/spacing; 
  rectMode(CENTER);
  
}

function draw() {
  background(0);
  for (let i=0; i<cols; i++){
    size[i] = [];
    for (let j=0; j<rows; j++){
      size[i][j] = (dist(mouseX, mouseY, i*spacing, j*spacing))*scl;
      noStroke();
      fill(220);
      rect(spacing/2 + i*spacing, spacing/2 + j*spacing, size[i][j], size[i][j]);
    }
  }
}