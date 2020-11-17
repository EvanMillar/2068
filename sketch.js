let s;
let scl = 20;
let scl2 = 40;
let food;
let food2;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(10);
    pickLocation();
    pickLocation2();
}

function pickLocation() {
    let cols = floor(width / scl);
    let rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}
function pickLocation2() {
    let cols = floor(width / scl2);
    let rows = floor(height / scl2);
    food2 = createVector(floor(random(cols)), floor(random(rows)));
    food2.mult(scl2);
}

function mousePressed() {
    s.total++;
}

function draw() {
    background(51);
    if (s.eat2(food,20)) {
        pickLocation();
    }
    if (s.eat2(food2,40)) {
        pickLocation2();
    }
    s.death();
    s.update();
    s.show();
    fill('yellow')
    rect(food.x, food.y, scl, scl);
    fill('blue')
    rect(food2.x, food2.y, scl2, scl2);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}