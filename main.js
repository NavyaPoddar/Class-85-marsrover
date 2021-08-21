var canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var rover_width=100;
var rover_height=90;
var rover_y=10;
var rover_x=10;
function add(){
  var background_image=new Image();
  background_image.onload= uploadbackground;
  background_image.src="mars.jpg";
  var rover_image=new Image();
  rover_image.onload= uploadrover;
  rover_image.src="rover.png";
}
function uploadbackground(){
    ctx.drawImage(background_image,0,0,800,600);
}
function uploadrover(){
    ctx.drawImage(rover_image,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",keydownfunction);
function keydownfunction(e){
 clickedkeycode= e.keyCode;
 console.log(clickedkeycode); 
if(clickedkeycode=="38"){
  up();
  console.log("up arrow pressed");
}
if(clickedkeycode=="40"){
  down();
  console.log("down arrow pressed");
}
if(clickedkeycode=="37"){
  left();
  console.log(" left arrow pressed");
}
if(clickedkeycode=="39"){
  right();
  console.log("right arrow pressed");
}
}


function up(){
  if(rover_y > 0){
    rover_y = rover_y-10;
    uploadbackground();
    uploadrover();
  }
}
function down() {
  if(rover_y < 600){
    rover_y = rover_y+10;
    uploadbackground();
    uploadrover();
  }
}
function left(){
  if(rover_x > 0){
    rover_x = rover_x-10;
    uploadbackground();
    uploadrover();
  }
}
function right(){
if (rover_x < 800){
  rover_x = rover_x+10;
  uploadbackground();
    uploadrover();
}
}
