class ChristmasDinner {
    constructor(budget) {
        this.budget = budget
        this.dishes = []
        this.products = []
        this.guests = {}
    }
    get budget() {
        return this._budget
    }
    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number')
        }
        return this._budget = value
    }
    shopping([type, price]) {
        if (this.budget < price) {
            throw new Error('Not enough money to buy this product')
        }
        this.products.push(type)
        this.budget -= price
        return `You have successfully bought ${type}!`
    }
    recipes(recipe) {
        for (let product of recipe.productsList) {

            if (!this.products.some(x => x === product)) {
                throw new Error('We do not have this product')
            }
            this.dishes.push(recipe)
            return `${recipe.recipeName} has been successfully cooked!`
        }
    }
    inviteGuests(name, dish) {
        if (!this.dishes.some(x => x.recipeName === dish)) {
            throw new Error('We do not have this dish')
        }
        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited')
        }
        this.guests[name] = dish
        return `You have successfully invited ${name}!`
    }
    showAttendance() {
        let guestsLog = []
        Object.entries(this.guests).forEach(([name, eat]) => {
            guestsLog.push(`${name} will eat ${eat}, which consists of ${this.dishes.find(x => x.recipeName === eat).productsList.join(', ')}`)
        })
        return guestsLog.join('\n')
    }
}
let dinner = new ChristmasDinner(300);

console.log(dinner.shopping(['Salt', 1]))
console.log(dinner.shopping(['Beans', 3]))
console.log(dinner.shopping(['Cabbage', 4]))
console.log(dinner.shopping(['Rice', 2]))
console.log(dinner.shopping(['Savory', 1]))
console.log(dinner.shopping(['Peppers', 1]))
console.log(dinner.shopping(['Fruits', 40]))
console.log(dinner.shopping(['Honey', 10]))
dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});
dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');
//console.log(dinner.dishes);
console.log(dinner.showAttendance());



