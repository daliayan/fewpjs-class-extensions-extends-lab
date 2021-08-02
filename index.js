// Your code here

class Polygon{
    constructor(sides){
        this.sides = sides;
        this.count = this.sides.length
    }

    get countSides(){
        return this.sides.length 
    }

    get perimeter() {
        if (!Array.isArray(this.sides)) return;
        let sum = 0;
        for (var int of this.sides) {
          sum += int
        }
        return sum
    }
}

class Triangle extends Polygon {

    get isValid() {

    }

}

class Square extends Polygon {
    
    get isValid() {

    }

    get area() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 4) return;
        return this.sides[0] * this.sides[0]
    }
}
