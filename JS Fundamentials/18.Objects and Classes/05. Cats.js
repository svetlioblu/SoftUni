function cat(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        meaw() {
            let result = `${this.name}, age ${this.age} says Meow`
            return result
        }
    }

    for (let cat of arr) {
        let token = cat.split(' ')
        let [catName, age] = [token[0], token[1]]
        let currentCat = new Cat(catName, age)
        console.log(currentCat.meaw())

    }
    
}
cat(['Mellow 2', 'Tom 5'])