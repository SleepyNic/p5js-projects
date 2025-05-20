let t = 0; // time variable

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(50,0,50);
  
  for (let y = 0; y < 48; y++) {
    for (let x = 0; x < 48; x++) {
      let scaleFactor = sin(t + (x + y) * 1.5); // Sine wave for scaling
      let size = map(scaleFactor, 0, 1, 0, 10); // Map scale factor to size range
      
      fill(x * 32, 0, y * 32);
      square(x * 50 + 25 - size / 2, y * 50 + 25 - size / 2, size); // Center square
    }
  }
  
  t += 0.03; // Increment time for animation
}
