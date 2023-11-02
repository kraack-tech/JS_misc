//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
// Adapted from https://github.com/nature-of-code/
// released under MIT license

//var ball;
var balls;


///////////////////////////////////////////////
function setup() {
  createCanvas(900,600);
  background(0);

  //ball1 = new Ball();

  balls = [];

  
  for (var i = 0; i < 99; i++) {
    balls.push(new Ball());
  }
    
 

}
////////////////////////////////////////////////
function draw() {
   for (var i = 0; i < 99; i++) {
    balls[i].run()
  }
  
}
///////////////////////////////////////////////
class Ball {

  constructor(){
    var randomX = width/2+random(-120,120);
    var randomY = height/2+random(-120,120);
    this.prevLocation = new createVector(randomX, randomY);

    this.velocity = new createVector(0, 0);
    this.location = new createVector(randomX, randomY);
    this.acceleration = new createVector(0, 0);
    this.maxVelocity = 2;


    //
  }

  run(){
    this.draw();
    this.move();
    //this.edges();
  }

  draw(){
/*     fill(125);
    ellipse(this.location.x, this.location.y, 40, 40); */

    
    stroke(204, 230, 255);
    strokeWeight(.5);
    line(this.location.x, this.location.y, this.prevLocation.x , this.prevLocation.y)
    this.prevLocation = this.location.copy();
  }

  move(){
    var mouse = createVector(mouseX, mouseY);
    var dir = p5.Vector.sub(mouse, this.location);
    dir.normalize();
    dir.mult(0.3);
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxVelocity);
    this.location.add(this.velocity);
  }

  //remove edge function = follows beyond cancas edges
/*   edges(){
    if (this.location.x<0) this.location.x=width;
    else if (this.location.x>width) this.location.x = 0;
    else if (this.location.y<0) this.location.y = height;
    else if (this.location.y>height) this.location.y = 0;
  } */
}
