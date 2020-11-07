function listOfProducts(arr) {
    let result = arr.sort((a, b) => a.localeCompare(b))
        .map((x, i) => (i+1) + '.' + x)
        .join('\n')
    return result

}
console.log(listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples",'homos','zuzi']))