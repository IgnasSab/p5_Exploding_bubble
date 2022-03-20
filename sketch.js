let initialCircleDiameter = 0
let circleDiameter = initialCircleDiameter
let length = 800
let width = 800
let i = 0
let distanceFromC

function setup() {
    createCanvas(length, width)
    background(0)
    circle(length / 2, width / 2, circleDiameter)
    
}
function draw() 
{
    translate(length/2, width/2)
    background(100)
    stroke(0)
    if (i < 200)
    {
        fill(255, 70, 200)

    } else if (i >= 200) 
    {
        fill(0, 255, 100)
    }
    
    if (circleDiameter >= width) {
        circleDiameter = width
    }
    circle(0,0,circleDiameter)
    circleDiameter+=2
    i+=2
}
function mousePressed() {
    coordinateY = mouseY - width / 2
    coordinateX = mouseX - length / 2
    distanceFromC = sqrt(pow(coordinateY, 2) + pow(coordinateX, 2))
    if (distanceFromC < circleDiameter / 2) {
        circleDiameter = initialCircleDiameter
        i = 0
    }
}