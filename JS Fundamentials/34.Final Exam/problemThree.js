function problemThree(input) {
    let capacity = Number(input.shift())
    let accounts = {}
    let command = input.shift()
    while (command != 'Statistics') {
        let [action, userName, paramA, paramB] = command.split('=')
        switch (action) {
            case 'Add':
                if (!accounts.hasOwnProperty(userName)) {
                    paramA = Number(paramA)
                    paramB = Number(paramB)
                    accounts[userName] = { sent: paramA, received: paramB }
                }
                break
            case 'Message':
                if (accounts.hasOwnProperty(userName) && accounts.hasOwnProperty(paramA)) {
                    accounts[userName].sent += 1
                    accounts[paramA].received += 1
                    if (accounts[userName].sent + accounts[userName].received >= capacity) {
                        console.log(`${userName} reached the capacity!`)
                        delete accounts[userName]
                    }
                    if (accounts[paramA].sent + accounts[paramA].received >= capacity) {
                        console.log(`${paramA} reached the capacity!`)
                        delete accounts[paramA]
                    }
                }
                break
            case 'Empty':
                if (accounts.hasOwnProperty(userName)) {
                    delete accounts[userName]
                }
                if (userName === 'All') {
                    for (let key of Object.keys(accounts)) {
                        delete accounts[key]
                    }
                }
                break
        }
        command = input.shift()
    }
    console.log(`Users count: ${Object.keys(accounts).length}`)
    Object.entries(accounts).sort(sortAccounts).forEach(element => {
        let sum = element[1].sent + element[1].received
        console.log(`${element[0]} - ${sum}`)
    })


    function sortAccounts([nameA, paramsA], [nameB, paramsB]) {
        return paramsB.received - paramsA.received || nameA.localeCompare(nameB)
    }
    
}

problemThree([
    '12',
    'Add=Bonnie=3=5',
    'Add=Johny=4=4',
    'Empty=All',
    'Add=Bonnie=3=3',
    'Statistics'
  ] 
)