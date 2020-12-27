class Tree {
    constructor(x,y,width,height){
        var options={
        isStatic:true
        }
        this.image=loadImage("tree.png")
        this.body= Matter.Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }

    display(){
    var pos=this.body.position;
     imageMode(CENTER)    
      image(this.image,pos.x,pos.y,700,700)
    }
}