//LeWitt 87
//http://massmoca.org/event/walldrawing87/

createCanvas(340, 340);
noFill();

//vertical lines
var counter = 5;
	while (counter <= width){
	stroke('black');	
	line(counter, 0, counter, 340);
  counter = counter + 10;
  }

//horizontal lines on bottom half
var counter = 170;
	while (counter <= width){
	stroke(255, 230, 100);	
	line(0, counter, width, counter);
  counter = counter + 10;
  }

//horizontal lines in top right quadrant
var counter = 0;
	while (counter <= width){
	stroke(255, 230, 100);	
	line(width/2, counter, width, counter);
  counter = counter + 10;
  }
  
//diagonal lines across the bottom
var counter = 0;
while (counter < width*3/2){
  stroke('black');
  line(0, height/2 + counter, counter, height/2);
  counter = counter + 15;
}

//diagonal lines in the bottom right quadrant
var counter = 0;
	while (counter < width/2){
  stroke('black');
	line(width/2, height - counter, width/2 + counter, height);
  counter = counter + 10;
}

var counter = 0;
	while (counter < width/2){
  stroke('black');
	line(width/2 + counter, height/2, width, height - counter);
  counter = counter + 10;
}

