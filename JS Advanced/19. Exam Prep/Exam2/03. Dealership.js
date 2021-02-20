const { assert } = require('chai')

let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}

describe('dealership', () => {
    it('newCarCost', () => {
        assert.equal(dealership.newCarCost('Audi A6 4K', 50000), 30000)
        assert.equal(dealership.newCarCost('Audi TT 8J', 30000), 16000)
        assert.equal(dealership.newCarCost('', 30000), 30000)
        assert.equal(dealership.newCarCost('Barakuda', 200), 200)
    })
    it('carEquipment', () => {
        assert.deepEqual(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation', 'Stereo'], [0, 4]), ['heated seats', 'Stereo'])
        assert.deepEqual(dealership.carEquipment(['sliding roof'], [0]), ['sliding roof'])
    })
    it('euroCategory', () => {

        assert.equal(dealership.euroCategory(5),`We have added 5% discount to the final price: 14250.`)
        assert.equal(dealership.euroCategory(4),`We have added 5% discount to the final price: 14250.`)
        assert.equal(dealership.euroCategory(2),`Your euro category is low, so there is no discount from the final price!`)
    })
})
