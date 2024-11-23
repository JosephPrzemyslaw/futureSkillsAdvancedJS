
function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    // this.getArea = function () {
    //     const p = this.getPerimeter() / 2;
    //     return  Math.sqrt(p * (p - a) * (p - b) * (p - c));
    // }
    // this.getPerimeter = function () {
    //     return this.a + this.b + this.c;
    // }
}

Triangle.prototype.getArea = function () {
    const p = this.getPerimeter() / 2;
    return  Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
}
Triangle.prototype.getPerimeter = function () {
    return this.a + this.b + this.c;
}

// class Triangle {
//     constructor(a, b, c) {
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     getArea () {
//         const halfPerimeter = this.getPerimeter() / 2;
//         return Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
//     }
//     getPerimeter () {
//         return this.a + this.b + this.c;
//     }
// }
