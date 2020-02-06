function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw(){
  if(mouseIsPressed){
    fill(0);
    circle(mouseX,mouseY,40);
  }

}
