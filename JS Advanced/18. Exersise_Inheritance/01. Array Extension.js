(function () {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }
    Array.prototype.skip = function (n) {
        let newArr = this.slice(n)
        return newArr
    }
    Array.prototype.take = function (n) {
        let newArr = this.slice(0, n)
        return newArr
    }
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b)
    }
    Array.prototype.average = function () {
        return this.reduce((a, b) => a + b) / this.length
    }
    
}())