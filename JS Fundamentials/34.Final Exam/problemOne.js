function problemOne(input) {
    let msg = input.shift()

    let line = input.shift()

    while (line != 'Finish') {
        let [command, paramA, paramB] = line.split(' ')
        switch (command) {
            case 'Replace':
                msg = msg.split(paramA).join(paramB)
                console.log(msg)
                break
            case 'Cut':
                paramA = Number(paramA)
                paramB = Number(paramB)
                if (isNaN(paramA) == false && paramA >= 0 && paramA < msg.length && isNaN(paramB) == false && paramB >= 0 && paramB < msg.length) {
                    msg = msg.substring(0, paramA) + msg.substring(paramB + 1)
                    console.log(msg)
                } else {
                    console.log(`Invalid indices!`)
                }
                break
            case 'Make':
                if (paramA === 'Upper') {
                    msg = msg.toLocaleUpperCase()
                } else {
                    msg = msg.toLocaleLowerCase()
                }
                console.log(msg)
                break
            case 'Check':
                if (msg.includes(paramA)) {
                    console.log(`Message contains ${paramA}`)
                } else {
                    console.log(`Message doesn't contain ${paramA}`)
                }
                break
            case 'Sum':
                paramA = Number(paramA)
                paramB = Number(paramB)
                if (isNaN(paramA) == false && paramA >= 0 && paramA < msg.length && isNaN(paramB) == false && paramB >= 0 && paramB < msg.length) {
                    let substr = msg.substring(paramA, paramB + 1)
                    let sum = []
                    for (let char of substr) {
                        sum.push(Number(char.charCodeAt()))
                    }
                    sum = sum.reduce((a, b) => a + b)
                    console.log(sum)

                } else {
                    console.log(`Invalid indices!`)
                }
                break
        }

        line = input.shift()
    }

}
problemOne([
    'DinnerIsServed',
    'Make Upper',
    'Check Dinner',
    'Replace N M',
    'Finish'
  ]  
)