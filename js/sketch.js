let shackleLift = 0; // シャックルの上がり具合を管理する変数
let maxLift = 40; // 鍵穴から出る最大量
let shackleAngle = 0;
let targetAngle = -30; // 開く角度

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
    updateLift();
    updateRotation();

    push();
    // 全体を持ち上げる
    translate(0, -shackleLift);

    // 高さの設定
    const y = -20;

    // --- 右足（固定）---
    drawRightBar(y, shackleLift);

    // --- 左足 + アーチ（回す）---
    push();

    // 右のシャックルをヒンジとしてそこへ軸をもってくる。
    translate(40, y);

    rotate(radians(shackleAngle));

    // 描画基準を基に戻す
    translate(-40, -y);

    // アーチを描く
    drawShackleCore();
    
    drawLeftBar(y, shackleLift);
    pop();
    pop();
}

function updateLift() {
    if (shackleLift < maxLift) {
        shackleLift += 1.0; // 徐々に上昇
    }
}

function updateRotation() {
    // まだ上がりきってない間は回転しない
    if (shackleLift < maxLift)
        return ;

    // 目標角度まで少しずつ回す
    if (shackleAngle > targetAngle) {
        shackleAngle -= 0.5;
    }
}

function drawShackleCore() {
    arc(0, -20, 80, 80, PI, 0);
}

function drawLeftBar(y, lift) {
    line(-40, y, -40, y + lift);
}

function drawRightBar(y, lift) {
    line(40, y, 40, y + lift);
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