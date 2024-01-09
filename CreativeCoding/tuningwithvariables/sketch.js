function setup() {
  createCanvas(windowWidth, windowWidth);
  fill('pink');
  stroke ('blue');
  strokeWeight (1);
  
}

function draw() {
 
  

var num = 20 //variable for number of squares


  
var sideLen = windowWidth/num; //var for sidelength each sqaure
  
  for (var y = 0; y < windowWidth; y = y + sideLen) {   //loop for y direction
    
     for (var x = 0; x < windowWidth; x = x + sideLen )  { //loop x direction
  
  quad (x,y,
        x + sideLen,y,
        x + sideLen, y + sideLen,
        x,y + sideLen);
    
  }
    
    
    
    
    
  }
  
 
  

  
   
 
  
  
  noLoop();
}