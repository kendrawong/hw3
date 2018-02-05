//diamond of lines
//lines spaced apart by 10

//top half of diamond

var counter = 5;
var xOne = 169
var xTwo = 171
while(counter < 160){
  line(xOne, counter + 5, xTwo, counter + 5)
  counter = counter + 10;
  xOne = xOne - 10;		//change x1 by 10
  xTwo = xTwo + 10;		//change x2 by 10
}


//bottom half of diamond

while(counter < 330){
  var counterDown = 170;
  var xOneDown = 10;
  var xTwoDown = 330;
  line(xOne, counter + 5, xTwo, counter + 5)
  counter = counter + 10;
  xOne = xOne + 10;
  xTwo = xTwo - 10;
}
