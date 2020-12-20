function vacation(peopleCount, peopleType, dayOfWeek) {
    let totalprice
  

    switch (peopleType) {
        case 'Students':
            if (dayOfWeek == 'Friday') {
                totalprice = (peopleCount * 8.45).toFixed(2)
            } else if (dayOfWeek == 'Saturday') {
                totalprice = (peopleCount * 9.80).toFixed(2)
            } else if (dayOfWeek == 'Sunday') {
                totalprice = (peopleCount * 10.46).toFixed(2)
            }
            if (peopleCount >= 30) {
                totalprice -= totalprice * 0.15
            }
            break
        case 'Business':
            if (peopleCount >= 100) {
                peopleCount -= 10
            }
            if (dayOfWeek == 'Friday') {
                totalprice = (peopleCount * 10.90).toFixed(2)
            } else if (dayOfWeek == 'Saturday') {
                totalprice = (peopleCount * 15.60).toFixed(2)
            } else if (dayOfWeek == 'Sunday') {
                totalprice = (peopleCount * 16).toFixed(2)
            }
            break
        case 'Regular':
            if (dayOfWeek == 'Friday') {
                totalprice = (peopleCount * 15).toFixed(2)
            } else if (dayOfWeek == 'Saturday') {
                totalprice = (peopleCount * 20).toFixed(2)
            } else if (dayOfWeek == 'Sunday') {
                totalprice = (peopleCount * 22.50).toFixed(2)
            }
            if (peopleCount >= 10 && peopleCount <= 20) {
                totalprice -= totalprice * 0.05
            }
            break
    }
    totalprice = Number(totalprice)
    console.log(`Total price: ${totalprice.toFixed(2)}`);

}
vacation(120,
    "Business",
    "Sunday"
    
    
)