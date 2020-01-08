function Ball(){
  this.x=random(width);
  this.y=random(height);
  this.xspeed=10;
  this.yspeed=10;
  this.show =function(){
    stroke(0);
    ellipse(this.x,this.y,50*2,50*2);
    fill(255,0,0);
      }
  this.update = function(){

    this.x+=this.xspeed;
    this.y+=this.yspeed;


    if (this.y>=height){

      this.yspeed-=10;

    }
    if (this.y<=0){

      this.yspeed+=10;

    }
    if (this.x>=width){

      this.xspeed-=10;

    }
    if (this.x<=0){

      this.xspeed+=10;

    }

  }
      
    }


