let img;
let sizeW;
let sizeH;
let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,^`'."

let video; let = w = 64; let = h = 48;

function preload(){
  img = loadImage("img\story.webp");
}

function setup() {
  createCanvas(360, 640);
  img.resize(100,0);
  sizeW = width / img.width;
  sizeH = height / img.height;
}

function draw() {
  background(220);

  for(i=0; i<img.width; i++) {
    for(j=0; j<img.height; j++){
      let pixelVal = img.get(i, j);
      let c = brightness(pixelVal);
      let tIndex = floor(map ( c, 0, 100,0, asciiChar.length ));
      
      let x = i * sizeW + sizeW/2;
      let y = j * sizeH + sizeH/2;
      let t = asciiChar.charAt(tIndex)
      textSize(sizeW)
      textAlign(CENTER,CENTER);
      text(t,x,y);
    }
  }
}