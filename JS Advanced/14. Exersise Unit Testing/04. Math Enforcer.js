const { assert } = require('chai')

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer Object', () => {
    it('addFive', () => {
        assert.isUndefined(mathEnforcer.addFive('g'))
        assert.isUndefined(mathEnforcer.addFive(undefined))
        //assert.isNaN(mathEnforcer.addFive(NaN))
        assert.equal(mathEnforcer.addFive(6), 11)
        assert.equal(mathEnforcer.addFive(-2), 3)
        assert.equal(mathEnforcer.addFive(1.2), 6.2)
        assert.equal(mathEnforcer.addFive(1), 6)

    })
    it('subtractTen', () => {
        assert.isUndefined(mathEnforcer.subtractTen('g'))
        assert.isUndefined(mathEnforcer.subtractTen(undefined))
        // assert.isNaN(mathEnforcer.subtractTen(NaN))
        assert.equal(mathEnforcer.subtractTen(12), 2)
        assert.equal(mathEnforcer.subtractTen(0), -10)
        assert.equal(mathEnforcer.subtractTen(-5), -15)
        assert.equal(mathEnforcer.subtractTen(1), -9)
        assert.equal(mathEnforcer.subtractTen(10), 0)
        assert.equal(mathEnforcer.subtractTen(20), 10)
        assert.equal(mathEnforcer.subtractTen(1.3), -8.7)
        assert.closeTo(mathEnforcer.subtractTen(10.2), 0.19, 0.2)
    })
    it('sum', () => {
        assert.isUndefined(mathEnforcer.sum('a', 2))
        assert.isUndefined(mathEnforcer.sum(5, 'c'))
        assert.equal(mathEnforcer.sum(5, 8), 13)
        assert.equal(mathEnforcer.sum(1, -1), 0)
        assert.equal(mathEnforcer.sum(-5, -8), -13)
        assert.equal(mathEnforcer.sum(-1.2, -1.3), -2.5)
        assert.closeTo(mathEnforcer.sum(1.3, -1.2), 0.10, 0.11)
        assert.closeTo(mathEnforcer.sum(0.1, 0.2), 0.30, 0.31)
    })
})
// console.log(mathEnforcer.addFive(1.1));