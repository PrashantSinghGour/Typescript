export namespace Drawing {
  export class Shape {

    constructor(public area: number) {
    }

    getArea() {
      console.log(this.area);
    }
  }

  export class Circle extends Shape {
    constructor(public area: number) {
      super(area);
      this.drawCircle();
    }
    drawCircle() {
      console.log('circle drawn!');
    }
  }

  export class eclipse extends Shape {
    constructor(public area: number) {
      super(area);
      this.drawEclipse();
    }
    drawEclipse() {
      console.log('eclipse drawn!');
    }
  }
}
