var ball;
var checker;

function setup() {
  createCanvas(windowWidth,windowHeight);
  ball = new Ball();
}
function draw() {
  background(0);
  ball.update();
  ball.show();


}
