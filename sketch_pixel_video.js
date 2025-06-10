let img;
let sizeW;
let sizeH;
let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,^`'."

let video; let = vidw = 64; let = vidh = 48; let scl = 20;
let w,h;

function setup() {
  createCanvas(vidw *scl, vidh * scl);
  
  video = createCapture(VIDEO);
  video.size(vidw,vidh);

  w = width / video.width;
  h = height / video.height;
}

function draw() {
  background(50,0,50);
  fill(0,255,0)
  video.loadPixels();

  for(i=0; i<video.width; i++) {
    for(j=0; j<video.height; j++){
      let pixelIndex = (i + j*video.width) * 4;
      let r = video.pixels[pixelIndex + 0]
      let v = video.pixels[pixelIndex + 1]
      let b = video.pixels[pixelIndex + 2]
      
      let bright = (r+ v + b) / 3;
      let tIndex = floor(map(bright, 0, 255, 0, asciiChar.length))
      let x = i * w + w/2;
      let y = j * h + h/2;
      let t = asciiChar.charAt(tIndex)
      textSize(w)
      textAlign(CENTER,CENTER);
      text(t,x,y);
    }
  }
}