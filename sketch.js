let button1;
let button2;
let angle = 0;
let topImg;

function setup() {
  createCanvas(1080, 1080);
  background(220);
  imageMode(CENTER);
  topImg = loadImage('https://github.com/BBSCodes/EnergyWheel/blob/main/Top.png');


}

function draw() {
  translate(width/2, height/2);
  rotate(.35);
  image(topImg, 0,0,1080/2,1080/2);

}

function drawRect(x, y) {
  rect(x, y, 85, 50);
}

function changeOrientation() {
  background(220);

  angle = angle + .1;
  push();
  translate(50, 50);
  rotate(angle);
  fill(255);
  rectMode(CENTER)
  rect(0, 0, 85, 50);
  pop();
}

function resetOrientation() {
  background(220);
  push();
  translate(50, 50);
  rotate(0);
  fill(255);
  rectMode(CENTER)
  rect(0, 0, 85, 50);
  pop();
}
