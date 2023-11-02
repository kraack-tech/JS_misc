// Example is based on examples from:
// http://brm.io/matter-js/
// https://github.com/shiffman/p5-matter
// https://github.com/b-g/p5-matter-examples

// module aliases
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Composites = Matter.Composites;
var bodies = Matter.bodies;
var Composite = Matter.Composite;


var engine;
var ball;
var ground;
var stack;

function setup() {
  createCanvas(1200, 600);

  // create an engine
  engine = Engine.create();

  ball = Bodies.circle(30, 0, 20, {restitution:1, friction: 0, density: 0.003});

  var options = {isStatic: true, angle: Math.PI * 0};
  ground = Bodies.rectangle(width/2, 500, width, 10, options);
  smallGround = Bodies.rectangle(50, 470, 100, 10, {isStatic: true, angle: Math.PI * 0.2});

  // add all of the bodies to the world
  World.add(engine.world, [ground, ball, smallGround]);

  setupDominoes();
}
/////////////////////////////////////////////////////////
function draw() {
  background(0);
  Engine.update(engine);

  fill(255);
  drawVertices(ball.vertices);

  drawDominoes();

  fill(128);
  drawVertices(ground.vertices);
  drawVertices(smallGround.vertices);
}
/////////////////////////////////////////////////////////
function setupDominoes(){
  // your code here
  size=50;
  stack = Composites.stack(100, 300, 40, 1, 15, 100, function(x, y) {
    return Bodies.rectangle(x, y, size /5, size*4);
  });

  World.add(engine.world, [stack]);

  dominoes = Matter.Composite.allBodies(stack);
}
/////////////////////////////////////////////////////////
function drawDominoes(){
  // your code here
  fill(255);
  for (var i = 0; i < dominoes.length; i++) {
    drawVertices(stack.bodies[i].vertices);
}
}
/////////////////////////////////////////////////////////
// ********* HELPER FUNCTIONS **********
/////////////////////////////////////////////////////////
function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}
