class Paper{

    constructor(x,y,radius){
  
    var option = {
  
     isStatic : false,
     restitution : 0.3,
     friction : 0.5,
     density : 1.2
  
    }
  
    this.body = Bodies.circle(x,y,radius,option);
    this.radius = radius

    this.image = loadImage("paperBall.png");
  
    World.add(world,this.body);
  
    }
  
    display(){
  
   var pos = this.body.position;
   //fill("pink")
  // ellipseMode(RADIUS);
   imageMode(CENTER);
   image(this.image,0,0,this.radius);
  // ellipse(pos.x,pos.y,this.radius);
   
   
    }
  
  }