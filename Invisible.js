class Invisible {

    constructor(x,y,width,height){
      
      var option = {
  
        isStatic : true
    
        }
    
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width
        this.height = height
      
        this.body.image = loadImage("dustbingreen.png");
  
        World.add(world,this.body);
     
  
      
  
    }
  
    display(){
  
      var pos = this.body.position;
      //var angle = this.body.angle;
      imageMode(CENTER)
      //fill("green");
      imageMode(CENTER);
      rectMode(CENTER)
      rect(pos.x,pos.y,this.width,this.height);
      image(this.image,0,0,this.width,this.height);
      
  
    }
  
  }