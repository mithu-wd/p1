var ball;

function setup() {
  createCanvas(windowWidth,windowHeight);
  ball = new Ball();
}
function draw() {
  background(200);
  ball.update();
  ball.show();


}
function keyPressed(){
  if (key == " "){
    ball.up();
  }
}

function mouseClicked(){
    ball.up();
}

