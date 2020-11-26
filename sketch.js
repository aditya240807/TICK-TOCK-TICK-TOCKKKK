function setup() {
  createCanvas(400,400);
  
  hr = hour()
  min = minute()
  sec = second()

  
}

function draw() {
  background(100,0,110);  
  drawSprites();
  angleMode(DEGREES)
  scAngle = map(sec,0,60,0,360)
  minAngle = map(min,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)
  translate(200,200)
  rotate(-90)
  push ()
  rotate (scAngle)
  stroke(55,0,0)
  strokeWeight(7) 
  line (0,0,100,0)
  pop ()

  push()
  rotate (minAngle)
  stroke(255,0,0)
  strokeWeight(7) 
  line (0,0,75,0)
  pop()
  
  
  push()
  rotate (hrAngle)
  stroke(100,0,0)
  strokeWeight(7) 
  line (0,0,50,0)
  pop()
  
  
  

}