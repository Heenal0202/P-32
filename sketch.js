const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
   getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg)
    }

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON = await response.json();
    //console.log(responseJSON.datetime);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13)
    console.log(hour)

    if(hour>= 04 && hour<= 06){
        bg = "sunrise1.png";
    }
    else if(hour>= 07 && hour<= 08){
        bg = "sunrise2.png";
    }
    else if(hour>= 09 && hour<= 10){
        bg = "sunrise3.png";
    }
    else if(hour>= 11 && hour<= 13){
        bg = "sunrise4.png";
    }
    else if(hour>= 14 && hour<= 15){
        bg = "sunrise5.png";
    }
    else if(hour>= 16 && hour<= 17){
        bg = "sunrise6.png";
    }
    else if(hour>= 18 && hour<= 19){
        bg = "sunset7.png";
    }
    else if(hour>= 20 && hour<= 23){
        bg = "sunset8.png";
    }
    else{
        bg="sunset11.png"
    }
    backgroundImg = loadImage(bg);


}
