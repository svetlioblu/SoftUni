let { assert } = require('chai')

let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}
describe('Pizza Place', () => {
    it('makeAnOrder', () => {
        let testOrder = { orderedPizza: 'Peperoni', orderedDrink: 'Coca Cola' }
        let testOrder1 = { orderedDrink: 'Coca Cola' }
        let testOrder2 = { orderedPizza: 'Peperoni' }
        let testOrder3 = { orderedPizzza: 'Peperoni' }

        assert.Throw(() => { pizzUni.makeAnOrder(testOrder1) }, 'You must order at least 1 Pizza to finish the order.')
        assert.Throw(() => { pizzUni.makeAnOrder({}) }, 'You must order at least 1 Pizza to finish the order.')
        assert.Throw(() => { pizzUni.makeAnOrder(testOrder3) }, 'You must order at least 1 Pizza to finish the order.')

        assert.equal(pizzUni.makeAnOrder(testOrder2), `You just ordered ${testOrder2.orderedPizza}`)
        assert.equal(pizzUni.makeAnOrder(testOrder), `You just ordered ${testOrder.orderedPizza} and ${testOrder.orderedDrink}.`)

    })
    it('getRemainingWork', () => {
        let test = [{ pizzaName: 'Verona', status: 'ready' }, { pizzaName: 'Formaggi', status: 'preparing' }]
        let test2 = [{ pizzaName: 'Verona', status: 'ready' }, { pizzaName: 'Fab', status: 'preparing' }, { pizzaName: 'Verona', status: 'ready' }, { pizzaName: 'FFa', status: 'preparing' }]
        let test3 = [{ pizzaName: 'Verona', status: 'ready' }, { pizzaName: 'Fab', status: 'ready' }, { pizzaName: 'Verona', status: 'ready' }, { pizzaName: 'FFa', status: 'ready' }]

        assert.equal(pizzUni.getRemainingWork(test), `The following pizzas are still preparing: Formaggi.`)
        assert.equal(pizzUni.getRemainingWork(test2), `The following pizzas are still preparing: Fab, FFa.`)
        assert.equal(pizzUni.getRemainingWork(test3), `All orders are complete!`)
    })
    it('orderType',()=>{
        assert.isUndefined(pizzUni.orderType(5,''))
        assert.isUndefined(pizzUni.orderType(5))

        assert.isUndefined(pizzUni.orderType(5,'aasdad'))
        assert.isNaN(pizzUni.orderType('sdd','Carry Out'))


        assert.equal(pizzUni.orderType(5,'Carry Out'),4.5)
        assert.equal(pizzUni.orderType(-1,'Carry Out'),-0.9)
        assert.equal(pizzUni.orderType(1.2,'Carry Out'),1.08)
        assert.equal(pizzUni.orderType(1.2,'Delivery'),1.2)
        assert.equal(pizzUni.orderType(8,'Delivery'),8)
        assert.equal(pizzUni.orderType(-12,'Delivery'),-12)
    })
    
})