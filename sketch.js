var shooter, ball, base1, base2;

function setup() {
    createCanvas(400,400);
    ball = createSprite(shooter.x, shooter.y, 30, 30);
    rand1 = random(30, 100);
    rand2 = random(50, 75);
    shooter = createSprite(30, 300, rand1, rand2);
    base1 = createSprite(40, 340, 75, 20);
    base2 = createSprite(40, 340, 75, 20);
}

function draw() {
    drawSprites();
}