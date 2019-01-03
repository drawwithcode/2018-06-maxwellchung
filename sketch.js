var myData;
var dogs1;
var sohaianjing;

function preload() {
myData = loadJSON('assets/anjing.json');
sohaianjing = loadImage('./assets/sohaidog.jpg');
}
var balls = [];
function setup() {
createCanvas(windowWidth, windowHeight);
for(var i=0; i<myData.dogs.length; i++){
dogs1 = myData.dogs[i];
var x =random(width);
var y =random(height);
var l = dogs1.content_text;
var n = dogs1.category;
var t1 = dogs1.start_date;
var t2 = dogs1.end_date;
var newBall = new Ball(x,y,l,n,t1,t2);
balls.push(newBall);
console.log(dogs1);
}
imageMode(CENTER);
}
function draw() {
backgroundImage(sohaianjing);
noStroke();
fill(79,44,16);
textSize(50);
textStyle(BOLD);
textAlign(CENTER);
text('Explore to type of Dogs',width/5,height/2);
for(var j = 0; j < balls.length; j++) {
balls[j].move();
balls[j].display();
balls[j].over(mouseX, mouseY);
}
}
function Ball(_x, _y, _label, _category, _time1, _time2) {
this.x = _x;
this.y = _y;
this.label = _label;
this.category = _category
this.time1 = _time1
this.time2 = _time2
this.color = 'white';
this.speed = 2;
this.size= 25;
this.text= 30;
this.font='Bodoni';
textAlign(CENTER);
this.text2 = 18;
this.yDir = random(-1, 1);
this.xDir = random(-1, 1);
this.move = function() {
this.x += this.speed * this.xDir;
this.y += this.speed * this.yDir;
if (this.y >= height || this.y <= 0) {
this.yDir *= -1;
}
if (this.x >= width || this.x <= 0) {
this.xDir *= -1;
}
}
this.display = function() {
fill(this.color);
textFont(this.font);
textSize(this.text);
textStyle(BOLD);
strokeWeight(4);
stroke(79,44,16);
text(this.label,this.x,this.y);
}
this.over = function() {
var d = dist(mouseX, mouseY, this.x, this.y);
if (d < this.size) {
this.display = function() {
fill(this.color);
textFont(this.font);
textSize(this.text);
textStyle(BOLD);
strokeWeight(4);
stroke(79,44,16);
text(this.label,this.x,this.y);
textSize(this.text2);
strokeWeight(4);
text(this.category,this.x,this.y+35);
text(this.time1,this.x,this.y+60);
text(this.time2,this.x,this.y+80);
noStroke();
}
}
}
}
function backgroundImage(sohaianjing) {
  push();
  translate(width/2,height/2);
  imageMode(CENTER);
  let scale = Math.max(width/sohaianjing.width,height/sohaianjing.height);
  image(sohaianjing,0,0,sohaianjing.width*scale,sohaianjing.height*scale)
  pop();
}
