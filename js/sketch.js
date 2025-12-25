function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#f2f2f2');

    translate(width / 2, height / 2); // 原点が画面中央になる。
    
    // --- 描画の初期設定 ---
    stroke(30);
    strokeWeight(4);
    noFill();

    // --- シャックル（U字の上部分）---
    arc(0, -20, 80, 80, PI, 0);

    // --- 本体 ---
    rectMode(CENTER);
    rect(0, 30, 140, 100, 10);

    // --- 鍵穴 ---
    fill(30);
    noStroke();
    circle(0, 20, 25);
    rect(0, 35, 10, 25, 0);
}
