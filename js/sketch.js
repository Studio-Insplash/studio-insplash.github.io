function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#f2f2f2');

    translate(width / 2, height / 2); // 原点が画面中央になる。
    
    stroke(30);
    strokeWeight(2);
    noFill();

    // --- シャックル（U字の上部分）---
    arc(0, -20, 100, 100, PI, 0);

    // --- 本体 ---
    rectMode(CENTER);
    rect(0, 40, 100, 120, 12);
}
