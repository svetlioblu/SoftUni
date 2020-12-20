function activationKeys(input) {
    let rawKey = input.shift()
    let commands = input.shift()
    let actions = {
        Contains(key, params) {
            [match] = params
            if (key.includes(match)) {
                console.log(`${key} contains ${match}`)
            } else {
                console.log(`Substring not found!`)
            }
        },
        Flip(key, params) {
            [caseMode, start, end] = params
            start = Number(start)
            end = Number(end)

            let subStr1 = key.substring(0, start)
            let subStr2 = key.substring(start, end)
            let subStr3 = key.substring(end)
            if (caseMode === 'Upper') {
                subStr2 = subStr2.toLocaleUpperCase()
            } else {
                subStr2 = subStr2.toLocaleLowerCase()
            }
            console.log(subStr1 + subStr2 + subStr3)
            rawKey = subStr1 + subStr2 + subStr3
        },
        Slice(key, params) {
            [start, end] = params
            start = Number(start)
            end = Number(end)

            let subStr1 = key.substring(0, start)
            let subStr2 = key.substring(start, end)
            let subStr3 = key.substring(end)
            console.log(subStr1 + subStr3)
            rawKey = subStr1 + subStr3
        }
    }




    while (commands != 'Generate') {
        let [action, ...params] = commands.split('>>>')
        let step = actions[action]
        step(rawKey, params)
        commands = input.shift()

    }

console.log(`Your activation key is: ${rawKey}`)

}
activationKeys([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ]
  )