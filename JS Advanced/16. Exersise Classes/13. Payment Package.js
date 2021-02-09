const { assert } = require('chai')

class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

describe('PaymentPackage', () => {
    it('Constructor', () => {
        let instance = new PaymentPackage('Name', 100)
        assert.equal(instance._name, 'Name')
        assert.equal(instance._value, 100)
        assert.equal(instance._VAT, 20)
        assert.equal(instance._active, true)
    })
    it('Name', () => {
        let instance = new PaymentPackage('Name', 100)
        assert.equal(instance.name, 'Name')
        instance.name = 'Pesho'
        assert.equal(instance.name, 'Pesho')
        assert.throw(() => { instance.name = '' }, 'Name must be a non-empty string')
        assert.throw(() => { instance.name = 2 }, 'Name must be a non-empty string')
    })
    it('Value', () => {
        let instance = new PaymentPackage('Name', 100)
        assert.equal(instance.value, 100)
        instance.value = 5
        assert.equal(instance.value, 5)
        assert.throw(() => { instance.value = -1 }, 'Value must be a non-negative number')
        assert.throw(() => { instance.value = 'string' }, 'Value must be a non-negative number')
        assert.doesNotThrow(() => { instance.value = 0 }, 'Value must be a non-negative number')
    })
    it('VAT', () => {
        let instance = new PaymentPackage('Name', 100)
        assert.equal(instance.VAT, 20)
        instance.VAT = 13
        assert.equal(instance.VAT, 13)
        assert.throw(() => { instance.VAT = -1 }, 'VAT must be a non-negative number')
        assert.throw(() => { instance.VAT = 'string' }, 'VAT must be a non-negative number')
        assert.doesNotThrow(() => { instance.VAT = 0 }, 'VAT must be a non-negative number')
    })
    it('Active', () => {
        let instance = new PaymentPackage('Name', 100)
        assert.equal(instance.active, true)
        instance.active = false
        assert.equal(instance.active, false)
        assert.throw(() => { instance.active = '123' }, 'Active status must be a boolean')
        assert.throw(() => { instance.active = 1 }, 'Active status must be a boolean')
        assert.throw(() => { instance.active = -1 }, 'Active status must be a boolean')
        assert.throw(() => { instance.active = [] }, 'Active status must be a boolean')
    })
    it('toString', () => {
        function test(name, value, VAT = 20, active = true) {
            return [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
            ].join('\n')
        }
        let instance = new PaymentPackage('Name', 100)
        assert.equal(instance.toString(), test('Name', 100))
        instance.active = false
        assert.equal(instance.toString(), test('Name', 100, 20, false))
        instance.VAT = 200
        assert.equal(instance.toString(), test('Name', 100, 200, false))
        instance.name = 'Gosho'
        assert.equal(instance.toString(), test('Gosho', 100, 200, false))
        instance.value = 2
        assert.equal(instance.toString(), test('Gosho', 2, 200, false))
    })
})

