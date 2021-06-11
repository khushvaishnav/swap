var a=prompt('Enter the first number');
var b=prompt('Enter the second number')





function setup() {
 var b2=createButton("click here to swaoe");
 b2.mousePressed(swape) 
}

function draw() {
  
}
function swape(){
  [a,b]=[b,a]
  console.log('The value of a after swapping '+a);
  console.log('The value of b after swapping '+b);


}

