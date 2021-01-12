class Tree{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(450,130,10,40,options);
        this.width=350;
        this.height=550;
        this.image=loadImage("tree.png")
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        image(this.image,pos.x,pos.y,this.width,this.height);

    }

}