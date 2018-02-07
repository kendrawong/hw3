//stroke and fill of box
function kendraPatch(x, y) {
  fill(0);
  stroke(255);
  rect(x, y, 100, 100);
  
//blue lines
  stroke(0, 0, 255);
	strokeWeight(4);
	line(x, y+15, x+100, y+15);
  line(x, y+85, x+100, y+85);
  
 //pacman
  noStroke();
  fill(255, 204, 0);
  arc(x+35, y+50, 40, 40, (0.25)*PI, -0.25*PI, PIE);
  
//pacdots  
  fill(255);
  ellipse(x+55, y+50, 10, 10);
  ellipse(x+70, y+50, 10, 10);
  ellipse(x+85, y+50, 10, 10);
}
  
background(255);

//location of patches
kendraPatch(0, 0);
kendraPatch(width-100, height-100);
