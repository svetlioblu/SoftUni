function password(input) {
    let name = input.shift()
    let pass = input.shift()

    let data = input.shift()

    while (data !== pass) {
        data = input.shift()
    }
    console.log(`Welcome ${name}!`)
}
password(['Nakov', '1234', '1234'])