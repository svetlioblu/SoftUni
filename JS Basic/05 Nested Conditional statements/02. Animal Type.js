function animalType(arg) {
    let animal = arg
    switch (animal) {
        case 'dog':
            console.log('mammal')
            break
        case 'snake':
        case 'tortoise':
        case 'crocodile':
            console.log('reptile')
            break
        default:
            console.log('unknown');
    }
}
animalType('tortoise')