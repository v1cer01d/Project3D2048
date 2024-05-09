var img;

var imggm;

var screen = "MENU";




function preload() {
  img = loadImage('OIG2.jpg');
  imggm = loadImage('OIG4.jfif');
}

function setup() {
  createCanvas(600, 600);
  start = createButton('Start');
}

var start;

function draw() {
  if (screen == "MENU") {
    background(img);
    start.position(300,270);
    start.mousePressed(startGame);

    
    let l = createButton('2048');
    l.position(300,10);
    
    text("Ваш рахунок", 10, 20);
    text("Список лідерів", 505, 20);
  } 
  if (screen == "GAME") {
    background(imggm);
    rect(400, 300, 100, 100);
    
    //
  } 

}

function startGame() {
  screen = "GAME";
  print(start);
  start.remove();
}

// start.mousePressed()
//   if(screen === "MENU"){
//     screen ="GAME";
//   }




// function mouseClicked() {
//   if (screen === "MENU") {
//     screen = "GAME";
//   } 
// }
