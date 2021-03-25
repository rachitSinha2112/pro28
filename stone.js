class Stone {
    constructor(x,y,radius){
        var options={
        isStatic:false
        }
        this.image=loadImage("stone.png")
        this.body= Matter.Bodies.circle(x,y,radius,options);
        this.width=width;
        this.height=height;
        this.r=radius;
        World.add(world,this.body);

    }

    display(){
    var pos=this.body.position;
     imageMode(CENTER)    
      image(this.image,pos.x,pos.y,50,50)
    }
}
