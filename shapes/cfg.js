import { Circle } from "./src/figures/circle.js";
import { Rectangle } from "./src/figures/rect.js";

export default {
    idMountingPoint: "app",
    canvas: {
        width: 400,
        height: 250,
    },
    figures: {
        circles: {
            amount: 100,
            getFigure: Circle.getRandom,
            maxRadius: 10,
        },
        rectangles: {
            amount: 50,
            getFigure: Rectangle.getRandom,
            maxWidth: 30,
            maxHeight: 20,
        },
    }
}