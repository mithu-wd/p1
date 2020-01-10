var ball;
var need=[];
var vi;
var ni;
var x=10;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  ball= new Ball();
  need.push(new Needles());
}


function draw() {
  
  background(10);
  for (var i=need.length-1; i>=0;i--){
  need[i].sho();
  need[i].update();
  if (need[i].end()){
    need.splice(i,1);
  }
 
  if(need[i].hit(ball)){
noLoop();  }
 
}
  ball.update();
  ball.show();
  
  if (frameCount %40 ==0){
    need.push(new Needles());

  }


}
function keyPressed(){
  if(key == ' '){
  ball.up();}
}
function mousePressed(){
  ball.up();

}
