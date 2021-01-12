class Chain{
    constructor(bodyA,pointB){
       
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:1,
            stiffness:0.004
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }
    fly(){
        this.body.bodyA=null;
    }
    attach(body){
      this.body.bodyA=body;
    }
    display(){
        if(this.body.bodyA){
        var pos=this.body.bodyA.position;
        var pointB=this.pointB;
        line(pos.x,pos.y,pointB.x,pointB.y);
    }}
}