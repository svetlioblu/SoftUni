function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetExpenses = (Math.trunc(lostFights / 2)) * helmetPrice
    let swordExpenses = (Math.trunc(lostFights / 3)) * swordPrice
    let shieldExpenses = 0
    let armorExpenses = 0
    let brokenShieldCounter = 0
    let aureus = 0

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            shieldExpenses += shieldPrice
            brokenShieldCounter++
        }

    }
    if (brokenShieldCounter > 1) {
        brokenShieldCounter = Math.trunc(brokenShieldCounter / 2)
        armorExpenses += brokenShieldCounter * armorPrice
    }
    aureus = helmetExpenses + swordExpenses + shieldExpenses + armorExpenses
    console.log(`Gladiator expenses: ${aureus.toFixed(2)} aureus`)
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
)
