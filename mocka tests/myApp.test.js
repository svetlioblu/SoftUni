let { sum } = require('./myApp')
let { expect } = require('chai')

describe('test SUM function', () => {
    it('works with Numbers', () => {
        expect(sum(1, 2)).to.equal(3)
    });
    it('work with numbers as string', () => {
        expect(sum('1', '2')).to.equal(3);
    });
    it('is NAN', () => {
        expect(sum(1, 'b')).to.be.NaN
    })
});

