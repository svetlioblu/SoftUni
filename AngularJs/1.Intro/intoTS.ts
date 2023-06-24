//predefine variables
let isEven: boolean = false
let num: number = 5
let str: string = 'test'

type User = {
    name: string;
    age: number
}

interface AnotherUser {
    firstName: string,
    id: number,
    getUserName: () => string
}
// use predifined variables

const pesho: User = {
    name: "pesho",
    age: 3,
    f: 3
}


const anotherUserList = [
    { firstName: 'Ivan', id: 3 },
    { firstName: 'Toni', id: 5 }
] as AnotherUser[]

class AnotherUserClass implements AnotherUser {
    firstName: string;
    id: number;
    getUserName() {
        return this.firstName
    }
}
// Inheritance
class Human {
    speak() {
        console.log('hello')
    }
}
class Person extends Human {
    //no reacheble
    private name: string
    public age: number

    constructor(name: string, age: number) {
        super()
        this.name = name;
        this.age = age;
    }
}
const user = new Person('ivan', 30)
console.log(user.age);
//Generics

function getIdentity<T>(id: T) {
    console.log(id)
}
getIdentity<string>('123')
getIdentity<number>(123)

//Enums

enum PaymentStatus {
    Failed,
    Successful,
    Pending
}
let x
if (x === PaymentStatus.Pending) {
    //TODO
}

//Modules
