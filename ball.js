function Ball(){
  this.h=60;
  this.y=random(50);
  this.gravity=0.6;
  this.yspeed=0;
  this.force=-10
  this.show =function(){
    stroke(0);
    ellipse(height/2/3,this.y,this.h,this.h);
    fill(255,0,0);
  }
  
  this.up=function(){
    this.yspeed=this.force;
     
   }
  this.update = function(){
///      ()
  this.yspeed+=this.gravity;
  this.y+=this.yspeed;
  this.yspeed-=0.1;
  if(this.y>height-this.h/2){
  this.y=height-this.h/2; 
  this.yspeed=0;
  }
  else
  this.w=this.h;
  if(this.y<0+this.h/2){
      
this.y=height;  }



  }


  }
