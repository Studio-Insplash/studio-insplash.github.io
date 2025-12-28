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
    translate(0, -shackleLift);
    rotate(radians(shackleAngle));

    drawShackleCore();
    drawShackleBars();
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

function drawShackleBars() {
    const leftX = -40;
    const rightX = 40;
    const y = -20;

    line(leftX, y, leftX, y + shackleLift);
    line(rightX, y, rightX, y + shackleLift);
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