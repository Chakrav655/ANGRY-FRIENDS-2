const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var posc = 250;

var engine, world;
var box1, pig1,pig2,pig3,pig4,pig5,pig6,pig7,pig8,pig9,pig10,pig11,pig12,pig13,pig14,pig15,pig16,pig17,pig18;
var backgroundImg,platform;
var bird,slingshot;
var bg ;


var gameState = "onSling";
var score = 0;

function preload() {
     bg = loadImage("sprites/bg1.png");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;



    ground = new Ground(windowWidth/2,height,windowWidth,20);
    platform = new Ground(150, 659,300, 600);
    platform1 = new Ground(1500, 659,300, 600);


    box1 = new Box(700+posc,320+posc,70,70);
    box2 = new Box(920+posc,320+posc,70,70);
    pig1 = new Pig(810+posc, 350+posc);
    pig2 = new Pig(88-+posc, 490+posc);
    pig3 = new Pig(70-+posc, 490+posc);
    pig4 = new Pig(400,500);
    pig5 = new Pig(500,500);
    pig6 = new Pig(600,500);
    pig7 = new Pig(700,500);
    pig8 = new Pig(800,500);
    pig9 = new Pig(450,350);
    pig10 = new Pig(550,350);
    pig11 = new Pig(650,350);
    pig12 = new Pig(750,350);
    pig13 = new Pig(500,280);
    pig14 = new Pig(600,280);
    pig15 = new Pig(700,280);
    pig16 = new Pig(550,200);
    pig17 = new Pig(650,200);
    pig18 = new Pig(600,90);






    log1 = new Log(810+posc,260+posc,300, PI/2);

    box3 = new Box(700+posc,240+posc,70,70);
    box4 = new Box(920+posc,240+posc,70,70);
    pig3 = new Pig(810+posc, 220+posc);

    log3 =  new Log(810+posc,180+posc,300, PI/2);

    box5 = new Box(810+posc,160+posc,70,70);
    log4 = new Log(760+posc,120+posc,150, PI/7);
    log5 = new Log(870+posc,120+posc,150, -PI/7);

    bird = new Bird(200,50);
    bird1 = new Bird(1350,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:160});

}

function draw(){
   // if(backgroundImg)
        background(bg);
    
        noStroke();
        textSize(35)
        fill("CORAL")
        text("Score  " + score, width-300, 50)
        text("DESTROY THE PYRAMID",600,100);
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    pig2.display();
    pig2.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    pig4.display();
    pig4.score();
    pig5.display();
    pig5.score();
    pig6.display();
    pig6.score();
    pig7.display();
    pig7.score();
    pig8.display();
    pig8.score();
    pig9.display();
    pig9.score();
    pig10.display();
    pig10.score();
    pig11.display();
    pig11.score();
    pig12.display();
    pig12.score();
    pig13.display();
    pig13.score();
    pig14.display();
    pig14.score();
    pig15.display();
    pig15.score();
    pig16.display();
    pig16.score();
    pig17.display();
    pig17.score();
    pig18.display();
    pig18.score();
    
    

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    platform1.display();
    //log6.display();
    slingshot.display(); 
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed<1){
       gameState="onSling";  
       bird.trajectory=[];
       Matter.Body.setPosition(bird.body, {x: 200 , y: 50});
       slingshot.attach(bird.body);
    }
}

