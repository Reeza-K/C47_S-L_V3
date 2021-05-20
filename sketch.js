const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var boardImage,blueImage,blue1,blueSpace;
var die,blueMoved;

function preload(){
    boardImage=loadImage("images/background.png");
}

function setup(){
    engine=Engine.create();
    world=engine.world
    createCanvas(600,725)
    engine.world.gravity.y=0
    //0:rolling or not, 1: current #displayed, 
    //2: time taken for die to stop, 3: Blinking or not,4: blinking counter
    die=[false, 1, 0, false, 0];
    blue1=new Piece(20,570,40,40);
    blueSpace=1;
    blueMoved=false;
}

function draw(){
    Engine.update(engine);
    background(255);
    image(boardImage,0,0,600,600);
    blue1.display();  

    if(die[3]===false){
        drawDice(525,660,die[1]);
    } else{
        console.log("elseCon")
       if(die[4] % 2===0){
            drawDice(525,660,die[1]);

            if(blueMoved===false && blueSpace !== 100){
                if(blueSpace % 10 ===0){
                    blue1.moveUp();
                }else{
                    var num=Math.floor(blueSpace/10);
                    if(num===0||num===2||num===4||num===6||num===8){
                        blue1.moveRight();
                    }else{
                        blue1.moveLeft();
                    }
                }
                blueMoved=true;
                blueSpace++;
            }
       }
       if(frameCount % 15 === 0){
           die[4]--;
           blueMoved=false;

           if(die[4]===0){
               die[3]=false;
               die[0]=false;
               laddersSnakes();
           }
       }

    }

    if(die[0]===true && die[2]>0){
        die[2]--;
        die[1]++;

        if(die[1]>6){
            die[1]=1;
        }

        if(die[2]===0){
            die[3]=true;
            die[4]=die[1]*2;
        }

    }
}

function keyPressed(){
    if(keyCode===32 && die[0]===false){
        die[0]=true;
        die[2]=round(random(10,20));
    }
}

function drawDice(x,y,side){
    fill("white");
    rectMode(CENTER);
    strokeWeight(5);
    rect(x,y, 100,100,20);


    switch(side){
        case 1: circle(x,y,20);
        break;

        case 2: circle(x+25,y+25,20);
                circle(x-25,y-25,20);
        break;

        case 3: circle(x,y,20);
                circle(x-25,y-25,20);
                circle(x+25,y+25,20);
        break;

        case 4: circle(x-25,y+25,20);
                circle(x-25,y-25,20);
                circle(x+25,y+25,20);
                circle(x+25,y-25,20);
        break;

        case 5: circle(x-25,y+25,20);
                circle(x-25,y-25,20);
                circle(x+25,y+25,20);
                circle(x+25,y-25,20);
                circle(x,y,20);
        break;

        case 6: circle(x-25,y+25,20);
                circle(x-25,y-25,20);
                circle(x+25,y+25,20);
                circle(x+25,y-25,20);
                circle(x-25,y,20);
                circle(x+25,y,20);
        break;
    }
}

function laddersSnakes(){
    //movment for ladders

    if(blueSpace===2){
        Matter.Body.setVelocity(blue1.body,{x: 7,y: -13});
        blueSpace=23;
    }

    if(blueSpace===6){
        Matter.Body.setVelocity(blue1.body,{x: -6,y: -26});
        blueSpace=45;
    }
    if(blueSpace===20){
        Matter.Body.setVelocity(blue1.body,{x: 7,y: -26});
        blueSpace=59;
    }
    if(blueSpace===57){
        Matter.Body.setVelocity(blue1.body,{x: 7,y: -26});
        blueSpace=96;
    }
    if(blueSpace===52){
        Matter.Body.setVelocity(blue1.body,{x: 0,y: -13});
        blueSpace=72;
    }
    if(blueSpace===71){
        Matter.Body.setVelocity(blue1.body,{x: -7,y: -13});
        blueSpace=92;
    }
    if(blueSpace===28){
        Matter.Body.setVelocity(blue1.body,{x: 7,y: -13});
        blueSpace=46;
    }

    //movment for Sankes

    if(blueSpace===43){
        Matter.Body.setVelocity(blue1.body,{x: 7,y: 20});
        blueSpace=17;
    }

    if(blueSpace===50){
        Matter.Body.setVelocity(blue1.body,{x: -32,y: 26});
        blueSpace=5;
    }
    if(blueSpace===20){
        Matter.Body.setVelocity(blue1.body,{x: 7,y: -26});
        blueSpace=59;
    }
    if(blueSpace===56){
        Matter.Body.setVelocity(blue1.body,{x: 20,y: 33});
        blueSpace=8;
    }
    if(blueSpace===73){
        Matter.Body.setVelocity(blue1.body,{x: -13,y: 38});
        blueSpace=15;
    }
    if(blueSpace===84){
        Matter.Body.setVelocity(blue1.body,{x: -7,y: 13});
        blueSpace=63;
    }
    if(blueSpace===87){
        Matter.Body.setVelocity(blue1.body,{x: 12,y: 26});
        blueSpace=49;
    }
    if(blueSpace===98){
         Matter.Body.setVelocity(blue1.body,{x: -14,y: 39});
         blueSpace=40;
        }
}