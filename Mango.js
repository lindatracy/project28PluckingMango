class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body=Bodies.circle(x,y,25,options);
        this.radius=50;
        
       
        this.image=loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        image(this.image,pos.x,pos.y,50,50);
    }
}