class Stone {
    constructor(){
        var options={
        isStatic:false
        }
        this.image=loadImage("stone.png")
        this.body= Matter.Bodies.circle(80,630,50,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }

    display(){
    var pos=this.body.position;
     imageMode(CENTER)    
      image(this.image,pos.x,pos.y,50,50)
    }
}