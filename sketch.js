var ball;
var database,value;

function setup(){
    // creating the connect
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballPosition = database.ref('Ball/Position');
    ballPosition.on("value",readPosition,showError);


    
}

function draw(){
    background("white");

    if(value!== undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-3,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(3,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-3);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+3);
        }
    } 
    
    drawSprites();
}

function readPosition(data){
    value = data.val(); // ball.position
    ball.x = value.X;
    ball.y = value.Y;
    
}

function writePosition(x,y){
    console.log(x +"  "+y);
    database.ref('Ball/Position').set({
        'X' : value.X + x,
        'Y' : value.Y + y
    })

}

function showError(){
    console.log("ERROR");
}