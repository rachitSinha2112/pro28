class sling{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 1.0,
            length: 20
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
fly(){
    this.sling.bodyA=null;
}

    display(){
        if( this.sling.bodyA!=null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}
