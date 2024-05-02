let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background(228);
}

function draw() {
  noStroke()
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 10000, 10000);
}