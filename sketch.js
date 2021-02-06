var background;
var balloon;


function preload(){
  backgroundimage=loadImage("HotAirballon");
}
function setup(){
    database = firebase.database();
    console.log(database);

    createCanvas(500,500);
   balloon = createSprite(250,250,10,10);
   balloon.shapeColor = "red";
    var balloonPosition = database.ref('ballon/height');
    balloonPosition.on("value", readPosition , showError);
}

function draw(){
    
    if(keyDown(LEFT_ARROW)){
        balloon.x = balloon.x -10;
    }
    else if(keyDown(RIGHT_ARROW)){
        balloon.x = balloon.x +10;
    }
    else if(keyDown(UP_ARROW)){
        balloon.y = balloon.y -10;
    }
    else if(keyDown(DOWN_ARROW)){
        balloon.y = balloon.y +10;
    }
    drawSprites();
}

function updateHeight(x,y){
    database.ref('balloon/height').set({
      'x': height.x + x,
      'y': height.y + y
    })
}
function readHeight(data){
    height = dat.val();
    balloon.x=height.x;
    balloon.y=height.y;


}
function showError(){
console.log("Error in writtingto the database")
}
