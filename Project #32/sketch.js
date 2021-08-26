const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;



let engine;
let world;
var blower,blowerMouth,ball;

function setup() {
  createCanvas(800,400);

  ball = new Ball (457,774,6);

}

function draw() {
  background(255,255,255);  
  ball.show();
}