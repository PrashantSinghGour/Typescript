"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawing = void 0;
var Drawing;
(function (Drawing) {
    class Shape {
        constructor(area) {
            this.area = area;
        }
        getArea() {
            console.log(this.area);
        }
    }
    Drawing.Shape = Shape;
    class Circle extends Shape {
        constructor(area) {
            super(area);
            this.area = area;
            this.drawCircle();
        }
        drawCircle() {
            console.log('circle drawn!');
        }
    }
    Drawing.Circle = Circle;
    class eclipse extends Shape {
        constructor(area) {
            super(area);
            this.area = area;
            this.drawEclipse();
        }
        drawEclipse() {
            console.log('eclipse drawn!');
        }
    }
    Drawing.eclipse = eclipse;
})(Drawing = exports.Drawing || (exports.Drawing = {}));
