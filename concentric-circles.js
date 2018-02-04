//concentric circles with spacing of 10

var counter = 10
while (counter < width){
  noFill()												//so next circle can be seen
  ellipse(170, 170, counter, counter);
  counter = counter + 10
}
