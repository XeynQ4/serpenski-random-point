const width = 1900;
const heigth = 1060;
const iterCount = 100;

const radius = 500;
const steps = 3;
let anchors = [];
let currentPoint;

function setup() {
    createCanvas(width, heigth);

    translate(width / 2, height / 2);
    // circle(0, 0, radius);

    const step = TWO_PI / steps;
    let angle = -HALF_PI;
    for (let i = 0; i < steps; i++) {
        let x = radius * cos(angle);
        let y = radius * sin(angle);
        anchors[i] = createVector(x, y);

        stroke('red');
        strokeWeight(10);
        point(x, y);

        strokeWeight(1);
        stroke(0, 0, 0);

        angle += step;
    }

    let x = random(-radius, radius);
    let y = random(-radius, radius);
    currentPoint = createVector(x, y);
    point(x, y);
}

function draw() {
    translate(width / 2, height / 2);

    // Runs the code iterCount times per draw loop
    for (let j = 0; j < iterCount; j++) {
        // Slowly erases old points
        // background(255, 255, 255, 1);

        // Let's anchors stay on screen if erasing
        // for (let i of anchors) {
        //     stroke('red');
        //     strokeWeight(10);
        //     point(i.x, i.y);

        //     strokeWeight(5);
        //     stroke(0, 0, 0);
        // }

        let nextAnchor = random(anchors);

        let nextX = (currentPoint.x + nextAnchor.x) / 2;
        let nextY = (currentPoint.y + nextAnchor.y) / 2;

        let nextPoint = createVector(nextX, nextY);
        currentPoint = nextPoint;
        point(nextX, nextY);
    }
}
