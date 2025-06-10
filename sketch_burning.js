let fuseLength = 400;
let fuseStartTime;
let burnTime = 5000; // 5 seconds
let exploded = false;

function setup() {
  createCanvas(600, 200);
  fuseStartTime = millis();
}

function draw() {
  background(255);
  let elapsed = millis() - fuseStartTime;
  let burnProgress = constrain(elapsed / burnTime, 0, 1);
  let burnX = 100 + fuseLength * burnProgress;

  stroke(180);
  strokeWeight(8);
  line(100, height / 2, 100 + fuseLength, height / 2);

  stroke(0);
  line(100, height / 2, burnX, height / 2);

  if (!exploded) {
    drawFlame(burnX, height / 2);
  }
}

function drawFlame(x, y) {
  noStroke();
  fill(255, 140, 0);
  ellipse(x, y - 15, 20, 30);
  fill(255, 200, 0);
  ellipse(x, y - 10, 10, 20);
}
