// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, value) => acc + value, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.sides[0] + this.sides[1] < this.sides[2]) return false;
    if (this.sides[0] + this.sides[2] < this.sides[3]) return false;
    if (this.sides[1] + this.sides[2] < this.sides[0]) return false;
    return true;
  }
}

class Square extends Polygon {
  get isValid() {
    return (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]);
  }

  get area() {
    return (this.sides[0] * this.sides[1]);
  }
}