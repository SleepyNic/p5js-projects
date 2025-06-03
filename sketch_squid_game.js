function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220,25,100) //r,v,b
  triangle(200,400,50,700,350,700)//point a(x,y) point b(x,y) point c(x,y)
  circle(200,350,230)
  circle(200,350,200) // x,y,px
  square(150,300,100)
  
  triangle(600,400,450,700,750,700)
  circle(600,350,230)
  circle(600,350,200)
  triangle(600,300,660,400,540,400)
}