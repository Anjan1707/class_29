const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground, rope;
let engine;
let world;
var fruit;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(250, 680, 500, 50);
  rope = new Rope(9, {x:250,y:200});
  var fruit_options = {
    density:0.001
  }
  fruit = Bodies.circle(300, 300, 15, fruit_options);
  Matter.Composite.add(rope.body, fruit);
  var fruit_con = new Link(rope, fruit);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
   ground.show();
   rope.show();
   ellipse(fruit.position.x, fruit.position.y, 15, 15);
}




