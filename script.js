const cats = [];
let lineStroke;
let lineDist = 120;
let distX;
let distY;
let distMouse;

let x = [0, 0],
  y = [0, 0],
  segLength = 30;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //based on size of window
  const catsNum = Math.floor(window.innerWidth/10);
  //console.log(catsNum);
  for(let i = 0; i < catsNum; i++){
    cats.push(new Cat());
  }
}

function draw(){
  background(55,100,144);
  // noFill();
  // circle(mouseX, mouseY, 120);
  // noCursor();
  dragSegment(0, mouseX, mouseY);
  dragSegment(1, x[0], y[0]);

  cats.forEach((cat, index) => {
    cat.update();
    cat.drawCat();
    cat.checkCats(cats.slice(index));
  })
}

class Cat {
  constructor(){
    //position - vector: entitity with direction and magnitude on xy axis
    this.pos = createVector(random(width), random(height));
    //velocity - left or right, up or down, and speed
    this.vel = createVector(random(-2,2), random(-2,2));
    ///size
    this.size = 5;
  }

//update movement by adding velocity
  update(){
    this.pos.add(this.vel);
    this.edges();
  }

  drawCat() {
    noStroke();
    fill('rbga(255,255,255, 0.5)');
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

  //connect
  checkCats(cats){

    cats.forEach(cat => {
      const d = dist(this.pos.x, this.pos.y, cat.pos.x, cat.pos.y);
      if(d < lineDist) {
        lineStroke = color(255,255,255);
        lineStroke.setAlpha((lineDist-d)*2);
        stroke(lineStroke);
        line(this.pos.x, this.pos.y, cat.pos.x, cat.pos.y);
      }
      distX = this.pos.x - mouseX;
      distY = this.pos.y - mouseY;
      distMouse = sqrt(distX * distX + distY + distY);

      if(distMouse < 30) {

      } else {

      }
    })
  }

}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
