var img;

var imggm;

var screen = "MENU";

var play;

var xCube = 0;
var yCube = 0;
var scoreElem;

var started = false;

let grid = [];
let score = 0;
const GRID_SIZE = 4;
var GRID_WIDTH = 50;
var SHIFT_X = 150;
var SHIFT_Y = 150;

function initGrid() {
  if (!started) {
    for (let i = 0; i < GRID_SIZE; i++) {
      grid[i] = [];
      for (let j = 0; j < GRID_SIZE; j++) {
        grid[i][j] = 0;
      }
    }
  
    var x = floor(random(GRID_SIZE-1));
    var y = floor(random(GRID_SIZE));
  
    grid[x][y] = 2;
    grid[x+1][y] = 2;

    started = true;
  }

  // draw grid
  for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
      fill("white");
      stroke("black");
      rect(i*GRID_WIDTH + SHIFT_X, j*GRID_WIDTH + SHIFT_Y, GRID_WIDTH, GRID_WIDTH);
      if (grid[i][j] != 0) {
        fill("gray");
        stroke("black");
        rect(i*GRID_WIDTH + SHIFT_X, j*GRID_WIDTH + SHIFT_Y, GRID_WIDTH, GRID_WIDTH);
        fill(0);
        textSize(25);
        text(grid[i][j], i*GRID_WIDTH + SHIFT_X, j*GRID_WIDTH+SHIFT_Y);
      }
    }
  }
}

function generateNewTile() {
  
}

function keyPressed() {
  
}



function preload() {
  img = loadImage('OIG2.jpg');
  imggm = loadImage('OIG4.jfif');
}

function setup() {
  createCanvas(600, 600);
  start = createButton('Start');
  l = createButton('2048');
}

var start;
var l;

function draw() {
  if (screen == "MENU") {
    background(img);
    start.position(300,270);
    start.mousePressed(startGame);

    l.position(300,10);
    
    text("Ваш рахунок", 10, 20);
    text("Список лідерів", 505, 20);
  } 
  
  if (screen == "GAME") {
    background(imggm);

    scoreElem = createDiv('Score = 0');
    scoreElem.position(20, 20);
    scoreElem.id = 'score';
    scoreElem.style('color', 'white');

    fill('#1B5222');
    rect(100, 50, 400, 600);
    
    fill('white');
    text('2048', 280, 25);

    restart = createButton('RESTART');
    restart.position(520, 20)
    restart.mousePressed(startGame);  

    initGrid();
  } 

}

function startGame() {
  screen = "GAME";
  print(start);
  start.remove();
  l.remove();
  started = false;
}

var xCube1, yCube1, xCube2, yCube2;

function mousePressed() {
  if (screen == "GAME") {
    xCube1 = floor((mouseX - SHIFT_X) / GRID_WIDTH);
    yCube1 = floor((mouseY - SHIFT_Y) / GRID_WIDTH);
  }
}


function mouseReleased() {
  if (screen == "GAME") {
    xCube2 = floor((mouseX - SHIFT_X) / GRID_WIDTH);
    yCube2 = floor((mouseY - SHIFT_Y) / GRID_WIDTH);

    print(xCube1, yCube1, xCube2, yCube2);

    if([i] = [j]){
      grid[i][j] = grid[i][j] * 2;
      score = score + grid[i][j];
      scoreElem.html('Score = ' + score);
    }
    // перевірити чи однакові значення у комірках
    // зробити merge
    // згенерувати нову комірку
  }
}