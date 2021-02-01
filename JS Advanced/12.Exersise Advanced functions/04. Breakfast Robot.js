function solution() {
    let receipt = {
        ingradientStorage: { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 },
        restock: (element, qty) => {
            qty = Number(qty)
            receipt.ingradientStorage[element] += qty
            return 'Success'
        },
        report: () => {
            let status = []
            for (let key in receipt.ingradientStorage) {
                status.push(`${key}=${receipt.ingradientStorage[key]}`)
            }
            return status.join(' ')
        },
        apple: (qty) => {
            qty = Number(qty)
            const carb = 1 * qty
            const fl = 2 * qty
            if (receipt.ingradientStorage.carbohydrate < carb || receipt.ingradientStorage.flavour < fl) {
                let ingradient = receipt.ingradientStorage.carbohydrate < carb ? 'carbohydrate' : 'flavour'
                return `Error: not enough ${ingradient} in stock`
            } else {
                receipt.ingradientStorage.carbohydrate -= carb
                receipt.ingradientStorage.flavour -= fl
                return `Success`
            }
        },
        lemonade: (qty) => {
            qty = Number(qty)
            const carb = 10 * qty
            const fl = 20 * qty
            if (receipt.ingradientStorage.carbohydrate < carb || receipt.ingradientStorage.flavour < fl) {
                let ingradient = receipt.ingradientStorage.carbohydrate < carb ? 'carbohydrate' : 'flavour'
                return `Error: not enough ${ingradient} in stock`
            } else {
                receipt.ingradientStorage.carbohydrate -= carb
                receipt.ingradientStorage.flavour -= fl
                return `Success`
            }
        },
        burger: (qty) => {
            qty = Number(qty)
            const carb = 5 * qty
            const fat = 7 * qty
            const fl = 3 * qty
            if (receipt.ingradientStorage.carbohydrate < carb) {
                return `Error: not enough carbohydrate in stock`
            } else if (receipt.ingradientStorage.fat < fat) {
                return `Error: not enough fat in stock`
            } else if (receipt.ingradientStorage.flavour < fl) {
                return `Error: not enough flavour in stock`
            } else {
                receipt.ingradientStorage.carbohydrate -= carb
                receipt.ingradientStorage.fat -= fat
                receipt.ingradientStorage.flavour -= fl
                return `Success`
            }
        },
        eggs: (qty) => {
            qty = Number(qty)
            const prot = 5 * qty
            const fat = 1 * qty
            const fl = 1 * qty
            if (receipt.ingradientStorage.protein < prot) {
                return `Error: not enough protein in stock `
            } else if (receipt.ingradientStorage.fat < fat) {
                return `Error: not enough fat in stock`
            } else if (receipt.ingradientStorage.flavour < fl) {
                return `Error: not enough flavour in stock`
            } else {
                receipt.ingradientStorage.protein -= prot
                receipt.ingradientStorage.fat -= fat
                receipt.ingradientStorage.flavour -= fl
                return `Success`
            }
        },
        turkey: (qty) => {
            qty = Number(qty)
            const prot = 10 * qty
            const carb = 10 * qty
            const fat = 10 * qty
            const fl = 10 * qty
            if (receipt.ingradientStorage.protein < prot) {
                return `Error: not enough protein in stock`
            } else if (receipt.ingradientStorage.carbohydrate < carb) {
                return `Error: not enough carbohydrate in stock`
            }
            else if (receipt.ingradientStorage.fat < fat) {
                return `Error: not enough fat in stock`
            } else if (receipt.ingradientStorage.flavour < fl) {
                return `Error: not enough flavour in stock`
            } else {
                receipt.ingradientStorage.protein -= prot
                receipt.ingradientStorage.carbohydrate -= carb
                receipt.ingradientStorage.fat -= fat
                receipt.ingradientStorage.flavour -= fl
                return `Success`
            }
        }
    }


    return function (input) {
        let [command, element, qty] = input.split(' ')
        return command == 'prepare' ? receipt[element](qty) : receipt[command](element, qty)
    }

}
let manager = solution();
console.log(manager("prepare turkey 1"))
manager("restock protein 10");
manager("prepare turkey 1");
manager("restock carbohydrate 10");
manager("prepare turkey 1");
manager("restock fat 10");
manager("prepare turkey 1");
manager("restock flavour 10");
manager("prepare turkey 1");
console.log(manager("report"))




