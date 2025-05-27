let bouncy = {
  
  size: 16,
  posX: 100,
  posY: 200,
  vitX: Math.random(8) -4,
  vitY: Math.random(8) -4,
  name: "A bouncy thing",
  
  bouger: function (){
    this.posX = this.posX + this.vitX;
    this.posY += this.vitY;  // posY = posY + vitY
  },
  
  rebondir: function (){
    if( this.posX + this.size > width || this.posX < 0 ){
      this.vitX = this.vitX * -1;
    }
    if( this.posY + this.size > height || this.posY < 0 ){
      this.vitY *= -1;  // vitY = vitY * -1;
    }
  },
  
  afficher: function (){
    stroke(0);
    square(this.posX, this.posY, this.size);
    noStroke();
    text(this.name, this.posX, this.posY-4);
  },
  
  update: function(){
    this.bouger();
    this.rebondir();
    //this.afficher();
  }

}; // bouncy object


let Blabla = Object.create(bouncy);
Blabla.name = "Bouncy McBounceface";
Blabla.vitX = Math.random(8) -4;
Blabla.vitY = Math.random(8) -4;

let Chaton = Object.create(bouncy);
Chaton.name = "Copy 2 of Bouncy déf bis";
Chaton.vitY = Math.random(8) -4;
Blabla.vitY = Math.random(8) -4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(120);
}

function draw() {
  background(0,0,0,3);
  bouncy.update();
  Blabla.update();
  Chaton.update();
  
  fill(0,255,125);
  noStroke();
  triangle(
    bouncy.posX, bouncy.posY,
    Blabla.posX, Blabla.posY,
    Chaton.posX, Chaton.posY,
  );
}