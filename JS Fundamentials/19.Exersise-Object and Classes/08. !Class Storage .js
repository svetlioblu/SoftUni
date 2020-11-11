class Storage {

    constructor(capacity) {
        this.storage = []
        this.capacity = capacity
        this.totalCost = 0
    }

    addProduct(product) {
        this.storage.push(product)
        this.capacity -= product.quantity
        this.totalCost += product.price * product.quantity

    }
    getProducts() {
        let output = []
        for (let product of this.storage) {
            output.push(JSON.stringify(product))

        }

        return output.join('\n')

    }

}

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);



