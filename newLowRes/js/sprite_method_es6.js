class Sprite {
    this.x;
    this.y;
    constructor (_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    up () {
        this.y -= 1;
    }
    down () {
        this.y += 1;
    }
    left () {
        this.x -= 1;
    }
    right () {
        this.x += 1;
    }
    draw(){}
}
