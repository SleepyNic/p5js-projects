function setup() {
  createCanvas(900,800);
  background(1,90,22)
}
let taille = 1;

function draw() {
  stroke(0,150,0)
  strokeWeight(5)
  noFill();
  circle(450, 400, taille)
  taille = taille + 20
}