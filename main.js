x = 0;
y = 0;

screen_width = 0;
screen_height = 0;

apple = "";
draw_apple = "";

speak_data = "";

to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload() {
  apple = loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

  to_number = Number(content);
  if(Number.isInteger(to_number)) {
    console.log("Started drawing apple.");
    draw_apple = "set";
  }
  else {
    console.log("The speech has not recognised a number.")
  }

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}


function setup() {
screen_width = window.innerWidth;
screen_height = window.innerHeight;

canvas = createCanvas(screen_width, screen_height - 200);
canvas.position(0, 150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(var i = 1; i <= to_number; i++)
  {
    x = Math.floor(Math.random() * 700);
    x = Math.floor(Math.random() * 400);
    Image(apple, x, y, 50, 50);
  }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = to_number + "apples drawn";
}
