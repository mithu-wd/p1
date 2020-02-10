var ball;
var need = [];
var vi;
var button;
var ni;
var x = 10;
var score = 0;
function setup() {
  if (window.innerHeight > window.innerWidth) {
    alert("Please use Landscape!");
  }

  createCanvas(window.innerWidth, window.innerHeight);
  ball = new Ball();
  need.push(new Needles());
}

function draw() {
  background(10);

  fill(255, 0, 0);
  textSize(32);
  text(parseInt(score), window.innerWidth - 110, 50);
  for (var i = need.length - 1; i >= 0; i--) {
    need[i].sho();
    need[i].update();
    if (need[i].end()) {
      need.splice(i, 1);
    }

    if (need[i].hit(ball)) {
      button = createButton("Restart");
      button.position(window.innerWidth / 2, window.innerHeight / 2);
      button.mousePressed(reload);
      noLoop();
    }
  }
  ball.update();
  ball.show();
  score += 0.5;

  if (frameCount % 40 == 0) {
    need.push(new Needles());
  }
}
function keyPressed() {
  if (key == " ") {
    ball.up();
  }
}
function mousePressed() {
  ball.up();
}
function reload() {
  document.location.reload();
}
