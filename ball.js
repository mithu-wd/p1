function Ball(){
  this.h=70;
  this.y=random(50);
  this.gravity=0.5;
  this.yspeed=0;
  this.force=-10
  this.w=h;
  this.show =function(){
    stroke(0);
    ellipse(height/2/3,this.y,h,this.w);
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
  if(this.y>height-h/2){
  this.y=height-h/2; 
  this.yspeed=0;
  this.w=5 ;
  }
  else
  this.w=h;
  if(this.y<h/2){
      
this.y=height;  }



  }


  }
