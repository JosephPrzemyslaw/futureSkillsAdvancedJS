import cfg from "../cfg.js";

class App {
    #ctx;
    constructor() {
        const canvas = this.#createHtml();
        this.#mount(canvas);

        this.#setCtx(canvas);
        this.#drawFigures();
    }

    #setCtx(canvas) {
        this.#ctx = canvas.getContext("2d");
    }

    #createHtml() {
        const canvas = document.createElement("canvas");
        canvas.width = cfg.canvas.width;
        canvas.height = cfg.canvas.height;

        return canvas;
    }

    #mount(canvas) {
        const mountingPoint = document.getElementById(cfg.idMountingPoint);
        mountingPoint.appendChild(canvas);
    }

    #drawFigures() {
        for (let keyFigure in cfg.figures) {
            const figure = cfg.figures[keyFigure];
            for (let i = 0; i < figure.amount; i ++) {
                figure.getFigure(this.#ctx).draw();
            }
        }
    }
}

new App();