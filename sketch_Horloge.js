let hLength = 60;
let mLength = 75;
let sLength = 100;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  let h = hour();
  let m = minute();
  let s = second();
  
  translate(width/2, height/2);
  rotate(-90)
  stroke(0)
  fill(20,0,20)
  ellipse(0, 0, 250,250);
  
  let hAngle = map(h-12 ,0 ,12 ,0 ,360);
  let mAngle = map(m ,0 ,60 ,0 ,360);
  let sAngle = map(s ,0 ,60 ,0 ,360);
  
  let hx = hLength*cos(hAngle);
  let hy = hLength*sin(hAngle);
  let mx = mLength*cos(mAngle);
  let my = mLength*sin(mAngle);
  let sx = sLength*cos(sAngle);
  let sy = sLength*sin(sAngle);
  
  
  strokeWeight(2);
  stroke(0,120,120);
  line(0 ,0 ,hx ,hy);
  ellipse(hx,hy,20,20);

  stroke(0,120,120);
  line(0 ,0 ,mx ,my);
  ellipse(mx,my,20,20);

  stroke(0,120,120);
  line(0 ,0 ,sx ,sy);
  ellipse(sx,sy,20,20);
}