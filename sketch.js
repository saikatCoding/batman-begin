const Engine = Matter.Engine
const World =Matter.World
const Bodies =Matter.Bodies
var thunder,thunder1,thunder2,thunder3,thunder4;
var engine,world;
var drops =[];
var rand;
var maxDrops = 100;
var thunderCreateFrame = 0;

function preload(){
  thunder1 = loadImage("1.png");  
  thunder2 = loadImage("2.png"); 
  thunder3 = loadImage("3.png"); 
  thunder4 = loadImage("4.png"); 
}

function setup(){
     engine = Engine.create();
    world= engine.world;
    createCanvas(400,650);
    umbrella =new Umbrella(200,450);
    if(frameCount%150===0){
        for(var i = 0; i<maxDrops;i++)
        drops.push(new Drop(random(0,400),random(0,400)))
    }

    
}

function draw(){
    Engine.update(engine);
    background(0);

    rand = Math.round(random(1.4))
    if(frameCount%80===0){
        thunderCreateFrame = frameCount
        thunder =createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
           
        
        
    }
    if(thunderCreateFrame+10===frameCount && thunder){
        thunder.destroy();
    }
    umbrella.display();
    for(var i = 0; i<maxDrops ; i++){
        drops[1].showDrop();
        drops[1].updateY();
    }
    drawSprites();
}   

}
