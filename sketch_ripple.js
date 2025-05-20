class Ripple {
  constructor(x, y,r_alpha, r_radius) {
    this.x = x;
    this.y = y;
    this.r_radius = 10;
    this.r_alpha = 255;
  }

  update() {
    this.r_radius += 1;
    this.r_alpha -= 2;
  }

  display() {
    noFill();
    stroke(116, 204, 244, this.r_alpha);
    strokeWeight(2);
    ellipse(this.x, this.y, this.r_radius);
    ellipse(this.x, this.y, this.r_radius * 1.7);
  }

  isFinished() {
    return this.r_alpha <= 0;
  }
}

let ripples = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 255, 255);
}

function draw() {
  background(90, 188, 216);

  for (let i = ripples.length - 1; i >= 0; i--) {
    let r = ripples[i];
    r.update();
    r.display();

    if (r.isFinished()) {
      ripples.splice(i, 1);
    }
  }
}

function mousePressed() {
  ripples.push(new Ripple(mouseX, mouseY));
}
