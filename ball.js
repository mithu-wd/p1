function Ball(){

    this.width=window.innerWidth;
    this.height=window.innerHeight;
    this.y=100;
    this.force=-10;
    this.x=this.width/8;
    this.speed=0;
    this.gravity=1;


this.show=function(){
    fill(255,0,0);
    ellipseMode(CENTER);
    ellipse(this.x ,this.y, 40, 40);
}
this.update=function(){

    this.speed+=this.gravity;
    this.y+=this.speed;
    this.speed-=0.1;    

    if(this.y>this.height-20){
        this.speed=0;
        this.y=this.height-20;
    }
    if(this.y<0){
        this.speed=0;
        this.y=0;
    }
this.up=function(){
    this.speed=this.force;

}
    


}




}
