var puck;
var left;
var right;

let leftscore = 0;
//let rightscore = 0;

function setup() {
 createCanvas(600,400);
 puck = new Puck();
 left = new Paddle(true);
 right = new Paddle(false);
}

function draw() {
  // put drawing code here
   background(0);
   puck.show();
   puck.update();
   puck.checkPaddleR(right);
   puck.checkPaddleL(left);

   right.show();
   left.show();
   right.update();
   left.update();

   left.move();
   right.move();

 	textSize(32);
    text(leftscore, 32, 40);
    //text(rightscore, width-64, 40);

}

function keyPressed() {
	if(key == ' '){
		puck.up();
	}
}

function mouseClicked() {
	puck.up();
}

