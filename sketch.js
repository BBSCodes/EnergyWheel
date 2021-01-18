let button1;
let button2;
let angle = 0;
let topImg;

function setup() {
  createCanvas(1080, 1080);
  background(220);
  imageMode(CENTER);
  topImg = loadImage('Top.png');


}

function draw() {
  translate(width/2, height/2);
  rotate(.35);
  image(topImg, 0,0,800,800);

  //   button1 = createButton('Rotate');
  //   button1.position(300, 60);
  //   button1.mousePressed(changeOrientation);

  //   button2 = createButton('Reset');
  //   if(mouseIsPressed == button2){
  //     angle = 0;
  //   }
  //   button2.position(300, 82);
  //   button2.mousePressed(resetOrientation);
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
