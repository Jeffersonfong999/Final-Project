//Osu Mania Game

//Set up the game Canvas Area
let cnv = document.getElementById("gameBoard");
let ctx = cnv.getContext("2d");
cnv.width = 2000
cnv.height = 900

//Event Listeners
document.addEventListener('keydown', keyPressed)

//Global Variables
let xVals = [175, 175, 175, 175]
let yVals = [40, 40, 40, 40]

let xLocation = [700, 875, 1050, 1225]
let yLocation = [100, 100, 100, 100]
let colour = ["yellow", "pink", "yellow", "blue"]
let yBlockSpeed = [10,10,10,10]

let score = 0

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    
    //Draw Play Board Click Area
    ctx.strokeBlock(700, 100, 700, 800)
    ctx.fillBlock(700, 750, 700, 40, "white")

    //Make the Blocks move
    for(let i = 0; i< 4; i++){
        yLocation[i] += yBlockSpeed[i]
        console.log(yLocation)
    }
    
    //Draw NoteBlocks
    for (let n = 0; n < 4; n++) {
        ctx.fillBlock(xLocation[n], yLocation[n], xVals[n], yVals[n], colour[n])
    }

    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}


// Helper Functions

//When the key is being Pressed
function keyPressed() {

    //Keys needed for game 
    if (event.code == 'KeyD') {
        console.log("DEEZ NUTS")
    }

    else if (event.code == 'KeyF') {
        console.log("FEEZ NUTS")
    }

    else if (event.code == 'KeyJ') {
        console.log("JEEZ NUTS")
    }

    else if (event.code == 'KeyK') {
        console.log("KEEZ NUTS")
    }
}

//Create Block
ctx.fillBlock = function (x1, y1, x2, y2, Color) {
    ctx.beginPath();
    ctx.rect(x1, y1, x2, y2);
    ctx.fillStyle = Color
    ctx.fill();
}

//Create stroke
ctx.strokeBlock = function (x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.rect(x1, y1, x2, y2);
    ctx.strokeStyle = "white";
    ctx.stroke();
}

