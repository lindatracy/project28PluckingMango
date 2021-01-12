class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.ground=Bodies.rectangle(400,680,800,10,options);
        this.x=400;
        this.y=680;
        this.width=800;
        this.height=10;
        World.add(world,this.ground);
    }
    display(){
        var pos=this.ground.position;
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
    }
}