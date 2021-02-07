class Rectangle {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color
    }
    get color() {
        return this._color
    }
    set color(value) {
        return this._color =value
    }
    calcArea() {

    }

}
let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
