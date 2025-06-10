function setup() {
  createCanvas(800, 800);
  noLoop();
  angleMode(RADIANS);
}

function draw() {
  background(0);
  let size = 60; // radius of the hexagon
  let w = size * 2;
  let h = sqrt(3) * size;

  for (let y = 0; y < height + h; y += h) {
    for (let x = 0; x < width + w * 0.75; x += w * 0.75) {
      let offsetY = ((x / (w * 0.75)) % 2) * (h / 2);
      drawHexagon(x, y + offsetY, size);
    }
  }
}

function drawHexagon(cx, cy, r) {
  stroke(255); 
  strokeWeight(3);      // ⬅️ thicker outline
  fill(250, 150, 0);     
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = PI / 3 * i;
    let x = cx + cos(angle) * r;
    let y = cy + sin(angle) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function keyPressed(){
  if( key == "s" ){
     save("drawing.png");
  }
}