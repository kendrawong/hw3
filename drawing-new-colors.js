function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    stroke(210, 75, 60);
    fill(250, 100, 80);
  }
    else if (key == 'G') {
    stroke(125, 200, 80);
    fill(195, 235, 110);
  } 
    else if (key == 'B') {
    stroke(60, 135, 205);
    fill(95, 215, 250); 
  }
    else if (key == 'O') {
    stroke(235, 110, 40);
    fill(255, 155, 50); 
  }
    else if (key == 'P') {
    stroke(235, 85, 155);
    fill(255, 120, 185); 
  }
    else if (key == 'Y') {
    stroke(230, 195, 65);
    fill(250, 240, 100); 
  }
}
