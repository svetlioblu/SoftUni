function solve(employees, criteria) {
    employees = JSON.parse(employees)
    if (criteria == 'all') {
        employees.forEach((element, i) => {
            console.log(`${i}. ${element.first_name} ${element.last_name} - ${element.email}`)
        })
    } else {
        let [key, value] = criteria.split('-')
        let id = 0
        employees.forEach((element) => {
            if (element[key] == value) {
                console.log(`${id}. ${element.first_name} ${element.last_name} - ${element.email}`)
                id+=1
            }
        })
    }
}
solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
)