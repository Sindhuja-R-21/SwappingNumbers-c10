var a,b;
//used to get input from users
a=prompt("Enter the 1st number");
b=prompt("Enter the 2nd number");

function setup() {
  createCanvas(800, 800);
  var button=createButton("Click here to swap");
  button.mousePressed(swap);
}

function draw() {
  background("black");
}
function swap(){
  [a,b]=[b,a];
  
  console.log("value of a after swappping"+a);
  console.log("value of b after swappping"+b);
}