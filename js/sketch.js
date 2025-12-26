let shackleLift = 0; // シャックルの上がり具合を管理する変数
let maxLift = 40; // 鍵穴から出る最大量

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#f2f2f2');
    translateToCenter();
    setupDrawingStyle();
    drawPadlock();
}

function translateToCenter() {
    translate(width / 2, height / 2); // 原点が画面中央になる。
}

function setupDrawingStyle(){
    // --- 描画の初期設定 ---
    stroke(30);
    strokeWeight(4);
    noFill();
}

function drawPadlock() {
    drawShackle();
    drawPadlockBody();
    drawKeyhole(); 
}

function drawShackle() {

    // --- シャックル（U字の上部分）---
    arc(arcX, arcY, arcW, arcH, PI, 0);
}

function liftShackle() {
    // process
}

function rotateLeftShackle() {
    // Process
}

function drawPadlockBody() {
    // --- 本体 ---
    rectMode(CENTER);
    rect(0, 30, 140, 100, 10);
}

function drawKeyhole() {
    // --- 鍵穴 ---
    fill(30);
    noStroke();
    circle(0, 20, 25);
    rect(0, 35, 10, 25, 0);
}