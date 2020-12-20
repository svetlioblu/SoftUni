function theatrePromotions(param1, param2) {
    let weekDay = param1
    let age = Number(param2)
    let price
    let isValid = true

    switch (weekDay) {
        case 'Weekday':
            if (age >= 0 && age <= 18) {
                price = 12
            } else if (age > 18 && age <= 64) {
                price = 18
            } else if (age > 64 && age <= 122) {
                price = 12
            } else {
                isValid = false
            }
            break;
        case 'Weekend':
            if (age >= 0 && age <= 18) {
                price = 15
            } else if (age > 18 && age <= 64) {
                price = 20
            } else if (age > 64 && age <= 122) {
                price = 15
            } else {
                isValid = false
            }
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                price = 5
            } else if (age > 18 && age <= 64) {
                price = 12
            } else if (age > 64 && age <= 122) {
                price = 10
            } else {
                isValid = false
            }
            break;
    }
    if (isValid) {
        console.log(`${price}$`);
    } else {
        console.log('Error!');

    }

}
theatrePromotions('Holiday', 15
)