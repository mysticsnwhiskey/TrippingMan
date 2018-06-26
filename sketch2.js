var osc;
var playing = false;

function setup() {
  backgroundColor = color(255,0,255);
  textAlign(CENTER);

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();
}

function draw() {
  background(backgroundColor)
  text('Play me, Bitch', width/2, height/2);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (!playing) {
      osc.freq(329.6);
      osc.amp(0.5, 0.05);
      playing = true;
      backgroundColor = color(0,255,255);
    }
  }
  if (keyCode === LEFT_ARROW) {
    if (!playing) {
      osc.freq(100);
      osc.amp(0.5, 0.05);
      playing = true;
      backgroundColor = color(0,255,255);
    }
  }
  if (keyCode === DOWN_ARROW) {
    if (!playing) {
      osc.freq(261);
      osc.amp(0.5, 0.05);
      playing = true;
      backgroundColor = color(0,255,255);
    }
  }
  if (keyCode === RIGHT_ARROW) {
    if (!playing) {
      osc.freq(293.7);
      osc.amp(0.5, 0.05);
      playing = true;
      backgroundColor = color(0,255,255);
    }
  }
}
function keyReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.035);
  playing = false;
  backgroundColor = color(255,0,255);
}
