function Ball(){
  this.y=random(50);
  this.gravity=0.5;
  this.yspeed=0;
  this.force=-10
  this.w=100;
  this.show =function(){
    stroke(0);
    ellipse(height/2/3,this.y,100,this.w);
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
  if(this.y>height-50){
  this.y=height-50; 
  this.yspeed=0;
  this.w=5 ;
  }
  else
  this.w=100;
  if(this.y<50){
      
this.y=height;  }



  }


  }
