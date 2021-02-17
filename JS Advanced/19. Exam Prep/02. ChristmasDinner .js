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
        this.products = type
        this.budget -= price
        return ''
    }
    recipes(recipe) {

    }
    inviteGuests(name, dish) {

    }
    showAttendance() {

    }
}
let a = new ChristmasDinner(300)
console.log(a.budget);