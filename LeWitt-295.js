//LeWitt 295
//http://massmoca.org/event/walldrawing295/

createCanvas(340, 340);
background("black"); 
stroke("white");
strokeWeight(3);
noFill();

ellipse((width/2), (width/2), width, height);
rect(0, 0, width, height);
rect(0, 0, 70, height);
rect(0, 0, 340-70, height);
line(70, 0, 0, 340); 
line(340-70, 0, 340, 340);
line(340, 0, 340-70, 340);
line((width/2), 0, 0, 340);
line((width/2), 0, 340, 340);
