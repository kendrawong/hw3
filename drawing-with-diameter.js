function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

//change color
function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(250, 100, 80);
  }
    else if (key == 'G') {
    fill(195, 235, 110);
  } 
    else if (key == 'B') {
    fill(95, 215, 250); 
  }
    else if (key == 'O') {
    fill(255, 155, 50); 
  }
    else if (key == 'P') {
    fill(255, 120, 185); 
  }
    else if (key == 'Y') {
    fill(250, 240, 100); 
  }
  
  //change diameter
  else if (key == '1') {
    diameter = 5;
  }
  else if (key == '2') {
    diameter = 15;
  }
  else if (key == '3') {
    diameter = 30;
  }
}
