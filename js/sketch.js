function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('#f2f2f2');

    translate(width / 2, height / 2);

    stroke(30);
    noFill();

    // 仮
    let t = frameCount * 0.05;
    let size = 80 + sin(t) * 5;

    ellipse(0, 0, size, size);
}
