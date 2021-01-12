function fruit(fruit, grams, pricePerKilo) {
    let convertGrams = grams / 1000
    let price = convertGrams * pricePerKilo
    console.log(`I need $${price.toFixed(2)} to buy ${convertGrams.toFixed(2)} kilograms ${fruit}.`);

}
fruit('apple', 1563, 2.35)