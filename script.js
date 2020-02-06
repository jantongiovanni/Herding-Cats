let p;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  p = new Cat();
}

function draw(){
  background(55,100,144);
  p.update();
  p.draw();
  p.edges();
}

class Cat {
  constructor(){
    //position - vector: entitity with direction and magnitude on xy axis
    this.pos = createVector(random(width), random(height));
    //velocity - left or right, up or down, and speed
    this.vel = createVector(random(-2,2), random(-2,2));
    ///size
    this.size = 10;
  }

//update movement by adding velocity
  update(){
    this.pos.add(this.vel);
  }

  draw() {
    noStroke();
    fill('rbga(255,255,255)');
    circle(this.pos.x, this.pos.y, this.size)
  }

  //detect edges
  edges() {
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }
    if(this.pos.y < 0 || this.pos.y > height){
      this.vel.y *= -1;
    }
  }
}
