function Ball(){
  this.y=random(50);
  this.gravity=0.5;
  this.yspeed=0;
  this.force=-10
  this.show =function(){
    stroke(0);
    ellipse(height/2/3,this.y,70,70);
    fill(255,0,0);
  }
  
  this.up=function(){
    this.yspeed=this.force;
     
   }
  this.update = function(){
///      ()
  this.yspeed+=this.gravity;
  this.y+=this.yspeed;
  if(this.y>height-35){
    this.w=5 ;
  this.y=height-35; 
  this.yspeed=0;
  }
  else
  this.w=70;
  if(this.y<0+35){
      
this.y=height;  }



  }


  }
