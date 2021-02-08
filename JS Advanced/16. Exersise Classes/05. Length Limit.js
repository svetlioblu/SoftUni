class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString
        this.innerLength = innerLength
    }
    increase(value) {
        this.innerLength += value
    }
    decrease(value) {
        if (this.innerLength - value < 0) {
            this.innerLength = 0
        } else {
            this.innerLength -= value
        }
    }
    toString() {
        if (this.innerString.length > this.innerLength) {

            return this.innerString.slice(0, -this.innerLength) + ('.').repeat(3)
        } else if (this.innerLength == 0) {
            return ('.').repeat(3)
        }
        else {
            return this.innerString
        }
    }
}
let test = new Stringer("Test", 5);
test.decrease(3);
console.log(test.toString()); 
test.decrease(5);
console.log(test.toString())
test.increase(4); 
console.log(test.toString()); 

