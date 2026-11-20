let carX = 175;
let carY = 300;
let carSpeed = 3;

let enemyX = 110;
let enemyY = 0;
let enemySpeed = 2;
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
    rect(carX, carY, 50, 80);

    fill ('yellow');
    rect (240, enemyY, enemySize, 80);

    fill ('darkblue');
    rect (enemyX, enemyY, enemySize, 80);

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
  
    carX = constrain(carX, 100, 250);


    

   

    
  }  