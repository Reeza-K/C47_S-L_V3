class Piece{
    constructor(x,y,width,height){
        var options={
            density: 0.001,
            frictionAir: 0.09
        }
     this.body=Bodies.rectangle(x,y,width,height,options);   
     this.image=loadImage("images/bluePiece.png");

     this.width=width;
     this.height=height;
     World.add(world,this.body);
    
    }

    display(){
        //console.log(this.body);
        var pos=this.body.position;
        var angle=this.body.angle;

        push();

        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);

        pop();
    }
    moveRight(){
        Matter.Body.setVelocity(this.body,{x:6.85, y:0});
    }
    moveLeft(){
        Matter.Body.setVelocity(this.body,{x:-6.85, y:0});
    }
    moveUp(){
        Matter.Body.setVelocity(this.body,{x:0, y:-6.85});
    }
    moveDown(){
        Matter.Body.setVelocity(this.body,{x:0, y:6.85});
    }
}