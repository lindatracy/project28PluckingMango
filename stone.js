class Stone{
    constructor(){
        var options={
            isStatic:false,
            friction:1,
            restitution:0,
            density:1.2
        }
        this.body=Bodies.circle(136,523,25,options);
        this.radius=50;
        this.image=loadImage("Stone.png");
        World.add(world,this.body);
      }
      
      display(){
          var pos=this.body.position;
          image(this.image,pos.x,pos.y,this.radius,50);
      }
}