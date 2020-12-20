function passwordReset(input) {
  let rawKey = input.shift()
  let line = input.shift()
  let actions = {
    TakeOdd() {
      let temp = ''
      for (let i = 1; i < rawKey.length; i += 2) {
        temp += rawKey[i]
      }
      rawKey = temp
      console.log(rawKey)
    },
    Cut(start, end) {
      start = Number(start)
      end = Number(end)
      rawKey = rawKey.substring(0, start) + rawKey.substring(start + end)
      console.log(rawKey)
    },
    Substitute(substring, substitute) {
      if (rawKey.includes(substring)) {
        rawKey = rawKey.split(substring).join(substitute)
        console.log(rawKey)
  
      } else {
        console.log(`Nothing to replace!`)
      }
    }
  }
  while (line != 'Done') {
    let[command,a,b]=line.split(' ')
    actions[command](a,b)
    line = input.shift()
  }
  console.log(`Your password is: ${rawKey}`)

}
passwordReset([
  'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
  'TakeOdd',
  'Cut 18 2',
  'Substitute ! ***',
  'Substitute ? .!.',
  'Done'
]
)