var circle = {
  x: 0,
  y: 200,
  diameter: 100,
  speed: 3
};
var circle2 = {
  x: 600,
  y: 300,
  x2: 625,
  y2: 350,
  x3: 575,
  y3: 350,
  speed: -3
};
var circle3 = {
  x: 10,
  y: 75,
  x2: 35,
  y2: 75,
  x3: -15,
  y3: 75,
  speed: -3
};
//----------------------------------------------------------
function setup() {
  createCanvas(600, 400);
}

function draw() {
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
  background(0, 0, 0);
  fill(250, 200, 200);

  //draw head
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

  //eyes
  fill(255, 255, 255);
  ellipse(circle.x - 20, circle.y - 10, 35);
  ellipse(circle.x + 20, circle.y - 10, 35);

  //pupils
  fill(r, g, b);
  ellipse(circle.x - 20, circle.y - 10, 25);
  ellipse(circle.x + 20, circle.y - 10, 25);

  //mouth
  fill(0, 0, 0);
  ellipse(circle.x, circle.y + 25, 40);

  //tongue
  fill(255, 0, 0);
  ellipse(circle.x, circle.y + 39, 20, 12);

  //edge detection
  if (circle.x > 550) {
    circle.speed = -3;
  } else if (circle.x < 50) {
      circle.speed = 3;
  }
  if (circle2.x < 20) {
    circle2.speed = 4;
  } else if (circle2.x2 > 600) {
    circle2.speed = -4;
  }
  circle.x += circle.speed;
  circle2.x += circle2.speed;
  circle2.x2 += circle2.speed;
  circle2.x3 += circle2.speed;
}
