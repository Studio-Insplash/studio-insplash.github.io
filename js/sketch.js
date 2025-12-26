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
    let arcX = 0;
    let arcY = -20;
    let arcW = 80;
    let arcH = 80;

    // --- シャックル（U字の上部分）---
    arc(arcX, arcY, arcW, arcH, PI, 0);

    // 左右の線をアーチの端から伸ばす
    liftShackle((arcX - arcW) / 2, arcY, (arcX + arcW) / 2, arcY);
}

function liftShackle(leftX, leftY, rightX, rightY) {
    // 上限を決めて、そこまで少しずつ上げる
    if (shackleLift < maxLift) {
        shackleLift += 0.5; // 0.5pxずつ上に
    }

    // シャックル描画
    push();
    setupDrawingStyle();
    translate(0, -shackleLift); // shackleLift分上に上がる

    // 左の縦棒
    line(leftX, leftY, leftX, shackleLift);
    // 右の縦棒
    line(rightX, rightY, rightX, shackleLift);
    pop();
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