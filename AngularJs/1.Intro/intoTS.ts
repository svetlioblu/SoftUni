//predefine variables
let isEven: boolean = false

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

const pesho = {
    name: "pesho",
    age: 3,
} as User


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