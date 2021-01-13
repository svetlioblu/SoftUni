function cookingByNumbers(...params) {
    let num = Number(params.shift())
    let actions = {
        chop(num) {
            return num / 2
        },
        dice(num) {
            return Math.sqrt(num)
        },
        spice(num) {
            return num += 1
        },
        bake(num) {
            return num * 3
        },
        fillet(num) {
            return num -= num * 0.2
        }
    }
    for (let action of params) {
        num = actions[action](num)
        console.log(num);
    }
    
}

console.log(cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet'))