class Stone {
    constructor(){
        var options={
        isStatic:true
        }
        this.image=loadImage("stone.png")
        this.body= Matter.Bodies.circle(100,630,80,options);
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