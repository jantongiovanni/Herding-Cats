class Puck {
	constructor() {
	this.y = height/2;
	this.x = 200;

	this.gravity = 0.3;
    this.lift = -7;
    this.velocity = 0;

    this.direction = 1;

    this.speed = 4;
    //1 for right, 0 for left;
}

	checkPaddleR(p) {
		//console.log(p.x);
		 if(this.x > p.x-16 && this.y < p.y + p.h/2 && this.y > p.y - p.h/2){
		 	console.log("Hit right!");
		 	leftscore++;
		 	this.direction = 0;
		 }
	}

	checkPaddleL(p) {
		if(this.x < p.x+16 && this.y < p.y + p.h/2 && this.y > p.y - p.h/2){
			console.log("Hit left!");
			leftscore++;
			this.direction = 1;
		}
	}

	show(){
		fill(255);
  		rect(this.x, this.y,16,16);
	}

	update() {
		//physics!
		this.velocity += this.gravity;
    	this.y += this.velocity;

    	if(leftscore >= 5 && leftscore < 15){
    		this.speed = 6;
    	}
    	if(leftscore >= 15)
    		this.speed = 8;

    	//left right movement
    	if(this.direction == 1){
    		this.x += this.speed;
    	} else {
    		this.x -= this.speed;
    	}
    		// console.log(width);
    		 //console.log(this.x);
    	if(this.x > width-24){
    		this.direction = 0;
    		leftscore = 0;
    		this.speed = 4;
    		this.y = height/2;
			this.x = width/2;

    	}

    	if(this.x < 24){
    		this.direction = 1;
    		leftscore = 0;
    		this.speed = 4;
    		this.y = height/2;
			this.x = width/2;
    	}
		
    	//keep the puck on screen
		if(this.y > height-16){
			this.y = height-16;
			//want to change this, only want to bounce off of the paddles
			this.velocity -= this.gravity*3;
		}
		if(this.y < 0){
			this.y = 0;
			this.velocity  += this.gravity*3;
		}

		//keep the puck from moving too quickly
		if(this.velocity > 8){
			this.velocity = 8;
		}
		if(this.velocity < -8){
			this.velocity = -8;
		}
	}

	up() {
		this.velocity = this.lift;
	}




}