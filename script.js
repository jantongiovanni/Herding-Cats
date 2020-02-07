const cats = [];

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
    let lineStroke;
    let lineDist = 120;
    cats.forEach(cat => {
      const d = dist(this.pos.x, this.pos.y, cat.pos.x, cat.pos.y);
      if(d < lineDist) {
        lineStroke = color(255,255,255);
        lineStroke.setAlpha((lineDist-d)*2);
        stroke(lineStroke);
        line(this.pos.x, this.pos.y, cat.pos.x, cat.pos.y);
      }

    })
  }

}
