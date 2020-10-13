function hotelRoom(arg1, arg2) {
    let month = arg1
    let nights = Number(arg2)
    let apartment = 0
    let studio = 0


    if (month === 'May' || month === 'October') {
        apartment = nights * 65
        studio = nights * 50
        if (nights > 14) {
            studio *= 0.70
        } else if (nights > 7) {
            studio *= 0.95
        }
    } else if (month === 'June' || month === 'September') {
        apartment = nights * 68.70
        studio = nights * 75.20
        if (nights > 14) {
            studio *= 0.80
        }
    } else if (month === 'July' || month === 'August') {
        apartment = nights * 77
        studio = nights * 76
    }
    if (nights > 14) {
        apartment *= 0.90
    }
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`)
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom('August', '20')