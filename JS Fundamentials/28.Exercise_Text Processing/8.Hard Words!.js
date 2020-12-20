function hardWords(input) {
    let letter = input[0]
    let words = input[1]

    letter = " " + letter + " "
   
    for (let word of words) {
        let reg = new RegExp(` ${'_'.repeat(word.length)}\\.?\\,?\\!? `)
        letter = letter.replace(reg, ` ${word} `)
    }
    console.log(letter.trim())
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________, My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)
