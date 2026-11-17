let catX=100;
let catY=100;
let catSize=50;
let catSpeed=2;

let mouseSize=30;

let catched = false;

let gameState="START";

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(220);
  
    if(gameState=="START"){
      //Rita upp startsida
      textAlign(CENTER)
      textSize(32);
      text("KATTEN och MUSEN",width/2, 125);
      textSize(16);
      text("Tryck på SPACE för att starta", width/2, 200);
      
    } else if(gameState=="PLAY"){
      //Spela spelet
    
    
    //Tagentbordstyrning
    if(keyIsDown(LEFT_ARROW)){
      catX=catX-catSpeed;
    }
     if(keyIsDown(RIGHT_ARROW)){
      catX=catX+catSpeed;
     }
     if(keyIsDown(UP_ARROW)){
      catY=catY-catSpeed;
     }
     if(keyIsDown(DOWN_ARROW)){
      catY=catY+catSpeed;
     }
  
    //kontrollera avståndet
    let d = dist(catX, catY, mouseX, mouseY);
  
    //kontrollera om katten har fångat musen
    if(d<catSize/2+mouseSize/2){
      gameState = "GAMEOVER";
      fill ('red');
      circle(mouseX, mouseY, 100);
    }
       
      //Rita ut grafiken
    fill('black');
    circle(catX, catY, catSize);
    
    //mustyrning
    fill('brown');
    circle (mouseX, mouseY, mouseSize);

        
    } else if(gameState=="GAMEOVER"){
      //Rita upp Game over-sida

      text("GAMEOVER!!", width/2, 125);
    }
  
  }
function keyPressed(){
  //Starta spelet
  if(keyCode==32){
    gameState="PLAY";
  }
}