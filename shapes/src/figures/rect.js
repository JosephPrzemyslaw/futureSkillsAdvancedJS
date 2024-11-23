import { Shape } from "./shape.js";
import constants from "../constants.js";
import { getRand } from "../helpers.js";
import cfg from "../../cfg.js";

export class Rectangle extends Shape {
    #width;
    #height;

    static getRandom(ctx) {
        const [x, y, width, height, colorIndex] = [
            cfg.canvas.width,
            cfg.canvas.height,
            cfg.figures.rectangles.maxWidth,
            cfg.figures.rectangles.maxHeight,
            constants.colors.length
        ].map(size => getRand(size));
        const color = constants.colors[colorIndex];

        return new Rectangle({ctx, x, y, width, height, color})
    }

    constructor({ctx, x, y, width, height, color}) {
        super({ctx, x, y, color});
        this.#width = width;
        this.#height = height;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.rect(this.x, this.y, this.#width, this.#height);
        this.ctx.stroke();
        this.ctx.closePath();
    }
}
