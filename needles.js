function Needles(){
    this.bottom= random(window.innerHeight-200);
    
    this.x =window.innerWidth;
    this.w=10 ;
    
    this.sho=function(){
        fill(255,255,0);
        rect(this.x,window.innerHeight-this.bottom,this.w,this.bottom)
        
        
    }
    
    this.update=function(){
        this.x-=5;
    }
    this.end= function(){
        if (this.x <-this.w){

            return true;}
            else{
                return false;
        }
    }
    
    this.hit = function(ball){
        if (ball.y+20>window.innerHeight-this.bottom )
        {
            if(ball.x>this.x-this.w && ball.x <this.x+this.w){
                return true;
            }
        }
    }
}