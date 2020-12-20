function secretChat(input) {
  let str = input.shift()
  let command = input.shift()
  let actions = {
    InsertSpace(msg, index) {
      index = Number(index)
      str = msg.substring(0, index) + ' ' + msg.substring(index)
      console.log(str)

    },
    Reverse(msg, substr) {
      if (!msg.includes(substr)) {
        return console.log(`error`)
      }
      let index = msg.indexOf(substr)
      let reversed = substr.split('').reverse().join('')
      str = msg.substring(0, index) + msg.substring(index + substr.length) + reversed
      console.log(str)

    },
    ChangeAll(msg, substr, replacement) {
      str = msg.split(substr).join(replacement)
      console.log(str)
    }
  }
  while (command != 'Reveal') {
    let [action, a, b] = command.split(':|:')

    let activity = actions[action]
    activity(str, a, b)
    command = input.shift()
  }
console.log(`You have a new text message: ${str}`)
}
secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal'
]

)