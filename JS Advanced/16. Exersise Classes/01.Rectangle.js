class Rectangle {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color
    }
    get color() {
        return this._color[0].toUpperCase() + this._color.substring(1)
    }
    set color(value) {
        return this._color = value
    }
    calcArea() {
        return this.width * this.height
    }

}
let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
