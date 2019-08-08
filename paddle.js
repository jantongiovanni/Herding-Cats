
class Paddle {
    constructor(isLeft) {
        this.y = height/2;
        this.w = 16;
        this.h = 80;
        this.ychange = 0;

        this.direction = 1;
        //1 is up, 0 is down
        
        if (isLeft) {
            this.x = this.w;
        } else {
            this.x = width - this.w;
        }  
    }
    
    update() {
        this.y += this.ychange;
    }
    
    move() {
        if(this.direction == 1){
            this.y += 1.5;
        } else {
            this.y -= 1.5;
        }

        if(this.y > height-40)
            this.direction = 0;

        if(this.y < 40)
            this.direction = 1;
    }
    
    show() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
    }
}