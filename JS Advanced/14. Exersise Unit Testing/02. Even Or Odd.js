const { assert } = require('chai')


function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('tisOddOrEven', () => {
    it('is undefined', () => {
        assert.isUndefined(isOddOrEven(5))
        assert.isUndefined(isOddOrEven(NaN))
        assert.isUndefined(isOddOrEven())
    })
    it('isodd', () => {
        assert.equal(isOddOrEven('abd'),'odd','odd is failed')
    })
    it('isEven', () => {
        assert.equal(isOddOrEven('ab'),'even','even is failed')
    })
})