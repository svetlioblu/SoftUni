function emojiDirector([str]) {
    let coolThreshold = str.match(/\d/g).reduce((a, b) => a * b)
    let allValidEmojies = str.match(/(\*\*|::)[A-Z][a-z]{2,}\1/g)
    let emojiCount = allValidEmojies.length
    console.log(`Cool threshold: ${coolThreshold}`)
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`)
    for (let emo of allValidEmojies) {
        let currentEmo = emo.replace(/(\*\*|::)/g, '')
            .split('')
            .map(x => x = x.charCodeAt())
            .reduce((a, b) => a + b)

        if (currentEmo > coolThreshold) {
            console.log(`${emo}`)
        }
    }
}
emojiDirector([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
  ]
  )