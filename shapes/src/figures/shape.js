export class Shape {
    constructor({ctx, x, y, color}) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw() {
        throw new Error("Missing draw function implementation !");
    }
}
