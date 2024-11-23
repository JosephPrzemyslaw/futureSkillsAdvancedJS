import { Shape } from "./shape.js";
import constants from "../constants.js";
import { getRand } from "../helpers.js";
import cfg from "../../cfg.js";

export class Circle extends Shape {
    static getRandom(ctx) {
        const [x, y, radius, color] = [getRand(cfg.canvas.width),
            getRand(cfg.canvas.height),
            getRand(cfg.figures.circles.maxRadius),
            constants.colors[getRand(constants.colors.length)]];

        return new Circle({ctx, x, y, radius, color})
    }

    constructor({ctx, x, y, radius, color}) {
        super({ctx, x, y, color});
        this.radius = radius;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.closePath();
    }
}
