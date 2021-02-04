const { assert } = require('chai')

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


describe('lookUpChar', () => {
    it('isRequiredParamType', () => {
        assert.isUndefined(lookupChar('string', '2'), 'numberAsString')
        assert.isUndefined(lookupChar(34, 2), 'strAsNum')
        assert.isUndefined(lookupChar([], 2), 'arrAzInput')
        assert.isUndefined(lookupChar(), 'is empty')
        assert.isUndefined(lookupChar('abc', NaN), 'NaN')
        assert.isUndefined(lookupChar('abc', 1.1), 'doble')

    })
    it('isCorrectIndex', () => {
        assert.equal(lookupChar('abc', -1), 'Incorrect index', 'minusIndex')
        assert.equal(lookupChar('abc', 100), 'Incorrect index', 'biggerIndex')
        assert.equal(lookupChar('abc', 3), 'Incorrect index', 'biggerIndex')
    })
    it('iisCorrectResult', () => {
        assert.equal(lookupChar('abc', 1), 'b', 'is return the correct value')
        assert.equal(lookupChar('abc', 2), 'c', 'is return the correct value')
        assert.equal(lookupChar('abc', 0), 'a', 'is return the correct value')
    })
})



console.log(lookupChar(`abv`, 1))