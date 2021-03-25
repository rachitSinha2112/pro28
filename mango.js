class Mango{
   constructor(x,y,radius){
    var options={
    isStatic:true,
    restitution:0,
    friction:1
     } 
      this.image=loadImage("mango.png")
      this.body= Matter.Bodies.circle(x,y,radius,options);
      this.r=radius;  
      World.add(world,this.body);
     }
        
      display(){
         var pos=this.body.position;
         imageMode(CENTER)    
         image(this.image,pos.x,pos.y,50,50)
        }
}
