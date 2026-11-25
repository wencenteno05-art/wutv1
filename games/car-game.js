let carX = 175;
let carY = 300;
let carSpeed = 5;

let enemyX = 110;
let enemyY = 0;

let enemy2X = 240;
let enemy2Y = -200;

let enemySpeed = 3;
let enemySize = 50;

function setup() {
  createCanvas(400, 600);
}
  
function draw() {
  background('green');

  fill ('gray');
  rect (100, 0, 200, 600);

  fill ('white')
  rect (200, 0, 10, 600);

  fill ('red');
  rect(carX, carY, 40, 50, 5);

  fill ('yellow');
  rect (enemy2X, enemy2Y, enemySize, 80, 3);

  fill ('darkblue');
  rect (enemyX, enemyY, enemySize, 80, 3);

  if(keyIsDown(LEFT_ARROW)){
    carX=carX-carSpeed;
  }
  if(keyIsDown(RIGHT_ARROW)){
    carX=carX+carSpeed;
  }
  if(keyIsDown(UP_ARROW)){
    carY=carY-carSpeed;
  }
  if(keyIsDown(DOWN_ARROW)){
    carY=carY+carSpeed;
  }

  enemyY = enemyY + enemySpeed; 
  enemy2Y = enemy2Y + enemySpeed;

  carX = constrain(carX, 100, 260);
  carY = constrain(carY, 0, 550);

  //Låt fiendebilen börja om från början
  if( enemyY > 600){
    enemyY = -100;
    enemyX = random(100, 230)
  }
  if(enemy2Y > 600){
    enemy2Y = -200;
    enemy2X = random(100, 230)
  }
  if(
    enemyX + 50 > carX &&
    enemyX < carX + 40 &&
    enemyY + 80 > carY &&
    enemyY < carY + 50){
    
  }

  if(false){
    fill('black');
    textSize(32);
    textAlign(CENTER);
    text("KROCK!", width/2, height/2);
  }



}