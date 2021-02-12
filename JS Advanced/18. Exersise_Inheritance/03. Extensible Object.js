function solve() {
    let myObj = {}

    myObj.extend = (value) => {
        Object.entries(value).forEach(([key, value]) => {
            if (typeof value === 'function') {
                Object.getPrototypeOf(myObj)[key] = value
            } else {
                myObj[key] = value
            }
        })
    }

    return myObj
}
let a = solve()
a.extend({
    extensionProperty: 'someString',
    extensionMethod: function () { },
    extensionProperty2: 'someString2',
}
)
let b = solve()

console.log(Object.getPrototypeOf(a))