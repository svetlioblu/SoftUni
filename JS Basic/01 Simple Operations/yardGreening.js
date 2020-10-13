function yardGreening(sqrt) {
    let squears = Number(sqrt)
    squears = squears * 7.61

    let discount = (squears * 18) / 100
    let total = squears - discount

    total = total.toFixed(2)
    discount = discount.toFixed(2)
    console.log(`The final price is: ${total} lv.`);
    console.log(`The discount is: ${discount} lv.`);



}
yardGreening("540")