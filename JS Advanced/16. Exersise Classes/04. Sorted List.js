class List {
    constructor() {
        this.storage = []
        this.size = 0
    }
    add(number) {

        this.storage.push(number)
        this.size+=1
        this.storage.sort((a, b) => a - b)
    }
    remove(index) {
        if (typeof index != 'number' || index < 0 || index > this.storage.length - 1) {
            return
        }
        this.storage.splice(index, 1)
        this.size-=1
    }
    get(index) {
        if (typeof index != 'number' || index < 0 || index > this.storage.length - 1) {
            return
        }
        return this.storage[index]
    }
   
}

let list = new List();

list.add(5)
list.add(5)
list.remove(0)

console.log(list.storage);
console.log(list.size);





