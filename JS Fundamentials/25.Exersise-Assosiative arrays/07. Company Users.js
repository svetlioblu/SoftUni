function companyUsers(input) {
    let list = {}
    for (let line of input) {
        let [companyName, id] = line.split(` -> `)
        if (list.hasOwnProperty(companyName)) {
            let currentEmployees = list[companyName]
            if (!currentEmployees.includes(id)) {
                currentEmployees.push(id)
            }
        } else {
            list[companyName] = [id]
        }
    }
    let sorted = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]))
    for (let key of sorted) {
        console.log(key[0])
        key[1].forEach(element => {
          console.log(`-- ${element}`)
            
        })
    }

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
)