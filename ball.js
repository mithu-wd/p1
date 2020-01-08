function Ball(){
  this.h=70;
  this.y=random(50);
  this.gravity=0.5;
  this.yspeed=0;
  this.force=-10
  this.w=this.h;
  this.show =function(){
    stroke(0);
    ellipse(height/2/3,this.y,this.h,this.w);
    fill(255,0,0);
  }
  
  this.up=function(){
    this.yspeed=this.force;
  console.log("working");
     
   }
  this.update = function(){
///      ()
  this.yspeed+=this.gravity;
  this.y+=this.yspeed;
  if(this.y>height-this.h/2){
  this.y=height-this.h/2; 
  this.yspeed=0;
  this.w=5 
  }
  else
  this.w=this.h;
  if(this.y<0+35){
      
this.y=height;  }



  }


  }
