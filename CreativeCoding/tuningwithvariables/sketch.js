//create programme to customise number of sqaures in a grid
// two variables 1. # of sqaures
                //2. side lengthe based on wondow width


function setup() {
  createCanvas(windowWidth,windowHeight);
  fill('pink')
  stroke ('black');
  background (150)
  strokeWeight (1);
  
}

function draw() {
  
  
  var num  = 2; // var for # of sqaures
  var sideLen = windowWidth/num ; // var for sid Len ea sqaure
  
 

  

  
  for (var y = 0; y < windowHeight; y = y + sideLen) {   //loop for y direction
    
     for (var x = 0; x < windowWidth; x = x + sideLen )  { //loop x direction
  
  quad (x,y,
        x + sideLen,y,
        x + sideLen, y + sideLen,
        x,y + sideLen);
    
  }
    
    
    
    
    
  }
  
 
  

  
   
 
  
 
}
function  windowResized () {
resizeCanvas (windowWidth, windowHeight);
