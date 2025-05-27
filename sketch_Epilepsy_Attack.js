class Bouncy {

  
  constructor( size, posX, posY, vitX, vitY ){
    this.size = size;
    this.posX = posX;
    this.posY = posY;
    this.vitX = vitX;
    this.vitY = vitY;
    
  } //fin constructor
  
  bouger (){
    this.posX = this.posX + this.vitX;
    this.posY += this.vitY;
  }

  rebondir(){
    if( this.posX + this.size > width || this.posX < 0 ){
      this.vitX = this.vitX * -1;
    }
    if( this.posY + this.size > height || this.posY < 0 ){
      this.vitY *= -1;  // vitY = vitY * -1;
    }
  }
  
  afficher(){
    
    let R = random(75)
    let V = random(255)
    let B = random(120)
    
    fill(R,V,B)
    square(this.posX, this.posY, this.size);
    square(this.posX, this.posY, this.size);
    square(this.posX, this.posY, this.size);
  }
  
  update(){
    this.bouger();
    this.rebondir();
    this.afficher();
  }
  
} //Bouncy class

let machin = new Bouncy(16,100,200,2,5);
let grouille = new Bouncy(19,150,200,3,6);
let truc = new Bouncy(48,100,250,2,3);

let mesBouncies = [];

//mesBouncies[0] = new Bouncy(16,100,200,1.2,1.7)
//mesBouncies[1] = new Bouncy(16,100,200,1.3,-1.2)
//mesBouncies[2] = new Bouncy(16,100,200,2,1.5)

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate: 120;
  
  for(let i = 0; i < 50; i++){
    //console.log(i);
    mesBouncies[i] = new Bouncy(16,200,200,random(-2,2), random(-2,2))
  }
}

function draw() {
  background(0,0.8);
  for(let i = 0; i < mesBouncies.length; i++){
    mesBouncies[i].update();
  }
}
