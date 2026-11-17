let carX = 175;
let carY = 300;
let carSpeed = 3;

function setup() {
    createCanvas(400, 600);
  }
  
  function draw() {
    background('green');

    fill ('gray');
    rect (100, 0, 200, 600);

    fill ('red');
    rect(carX, carY, 50, 80);

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
       carX = constrain(carX, 100, 250);

    fill ('darkblue');
    rect ()

    
  }  