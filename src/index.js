
type Point2d = {|
  x: number,
  y: number
|};
const myPoint: Point2d = {
  x: 1,
  y: 2
};
console.log(myPoint.x, myPoint.y);

class shape {
  color: string
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

}

class square extends shape{
  length: number
  constructor(color, length) {
    super(color);
    this.length = length;
  }

  area() {
    let a = this.length * this.length; 
    console.log('Area of this ' + this.getColor() + ' square is ' + a);
    return a;
  }

  perimeter() {
    return this.length * 4;
  }

}

let sq = new square("red",10);

console.log(sq.area());
console.log(sq.perimeter());
