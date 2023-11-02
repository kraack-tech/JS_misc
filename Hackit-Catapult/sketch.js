// Example is based on examples from:
// http://brm.io/matter-js/
// https://github.com/shiffman/p5-matter
// https://github.com/b-g/p5-matter-examples

// module aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;

var engine;
var ground;

var ball1;
var ball2;

var catapult;
var catapultSpacer;
var constraint;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create(); // create an engine
  setupCatapult();
  setupBalls();
  setupGround();
}
/////////////////////////////////////////////////////////////
function draw() {
  background(0);
  Engine.update(engine);
  drawBalls();
  drawCatapult();
  drawGround();

  //draws constraint to verify position
/*   push();
  stroke(255,100,100);
  strokeWeight(2);
  drawConstraint(constraint);
  pop(); */
}
/////////////////////////////////////////////////////////////
function setupCatapult(){
  // your code here
  catapult = Bodies.rectangle(width/2, height-90, 600, 20);  
  catapultSpacer = Bodies.rectangle(width/5, height, 20, 160, {isStatic: true});
  constraint = Constraint.create({
    pointA: { x: 400, y: height-110 },
    bodyB: catapult,
    pointB: { x: -10, y: -20 },
    stiffness: 1,
    length: 0
  });
  World.add(engine.world, [catapult,constraint, catapultSpacer]);
  
}
/////////////////////////////////////////////////////////////
function drawCatapult(){
  // your code here
  noStroke();
  fill(255);
  drawVertices(catapult.vertices);
  fill(255,0,0);
  drawVertices(catapultSpacer.vertices);
}
/////////////////////////////////////////////////////////////
function setupBalls(){
  // your code here
  ball1 = Bodies.circle(600, 0, 50, {restitution:.8, density: 0.015});
  ball2 = Bodies.circle(120, 440, 20, {restitution:.15, density: 0.001});  //restitution :15% allows it to at some point drift off the catapult
  World.add(engine.world, [ball1, ball2]);

}
/////////////////////////////////////////////////////////////
function drawBalls(){
  // your code here
  noStroke();
  fill(0, 153, 255);
  drawVertices(ball1.vertices);
  drawVertices(ball2.vertices);
}
/////////////////////////////////////////////////////////////
function setupGround(){
  ground = Bodies.rectangle(400, height-10, 810, 25, {isStatic: true});
  World.add(engine.world, [ground]);
}
/////////////////////////////////////////////////////////////
function drawGround(){
  noStroke();
  fill(128);
  drawVertices(ground.vertices);
}
////////////////////////////////////////////////////////////////
// ******* HELPER FUNCTIONS *********
// DO NOT WRITE BELOW HERE
/////////////////////////////////////////////////////////////
function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}


function drawConstraint(constraint) {
  var offsetA = constraint.pointA;
  var posA = {x:0, y:0};
  if (constraint.bodyA) {
    posA = constraint.bodyA.position;
  }
  var offsetB = constraint.pointB;
  var posB = {x:0, y:0};
  if (constraint.bodyB) {
    posB = constraint.bodyB.position;
  }
  line(
    posA.x + offsetA.x,
    posA.y + offsetA.y,
    posB.x + offsetB.x,
    posB.y + offsetB.y
  );
}