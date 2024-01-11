let img;

function preload (){
  
  img = loadImage ('bermudianalizard.gif');
  
}
  function setup() {
    createCanvas(windowWidth, windowWidth);
    noStroke ();
  }
  

function draw() {
  
 
 var num = 1 ;
  
  var sideLen = windowWidth/num; // x length
  
  
  for ( var y= 0; y < windowWidth; y = y+sideLen) {
     
    for ( var x= 0; x < windowWidth; x = x + sideLen) {//row across x
  
   quad (x, y, 
        x + sideLen, y, 
        x + sideLen, y + sideLen, 
        x , y + sideLen);
    
    image (img, x,y);
    