function heroes(input) {
    let n = Number(input.shift())
    let heroes = {}
    let actions = {
        CastSpell(heroName, MPNeeded, spellName) {
            MPNeeded = Number(MPNeeded)
            if (heroes[heroName].MP < MPNeeded) {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
            } else {
                heroes[heroName].MP -= MPNeeded
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].MP} MP!`)
            }
        },
        TakeDamage(heroName, damage, attacker) {
            damage = Number(damage)
            heroes[heroName].HP -= damage
            if (heroes[heroName].HP > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].HP} HP left!`)
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`)
                delete heroes[heroName]
            }
        },
        Recharge(heroName, amount) {
            amount = Number(amount)
            let temp = 0
            if (heroes[heroName].MP + amount > 200) {
                temp = (200 + amount) - (heroes[heroName].MP + amount)
                heroes[heroName].MP = 200
                console.log(`${heroName} recharged for ${temp} MP!`)
            } else {
                heroes[heroName].MP += amount
                console.log(`${heroName} recharged for ${amount} MP!`)
            }
        },
        Heal(heroName, amount) {
            amount = Number(amount)
            let temp = 0
            if (heroes[heroName].HP + amount > 100) {
                temp = (100 + amount) - (heroes[heroName].HP + amount)
                heroes[heroName].HP = 100
                console.log(`${heroName} healed for ${temp} HP!`)
            } else {
                heroes[heroName].HP += amount
                console.log(`${heroName} healed for ${amount} HP!`)
            }
        }
    }
    for (let i = 0; i < n; i++) {
        let [name, hitpoints, mana] = input.shift().split(' ')
        heroes[name] = { HP: Number(hitpoints), MP: Number(mana) }
    }
    let line = input.shift()
    while (line != 'End') {
        let [action, heroName, amount, knowledge] = line.split(' - ')
        amount = Number(amount)
        actions[action](heroName, amount, knowledge)
        line = input.shift()
    }
    Object.entries(heroes).sort(sortHeroes).forEach(element => {
      console.log(`${element[0]}`)
      console.log(`  HP: ${element[1].HP}`)
      console.log(`  MP: ${element[1].MP}`)  
    })

    function sortHeroes([HeroA, paramsA], [HeroB, ParamsB]) {
        return ParamsB.HP - paramsA.HP || HeroA.localeCompare(HeroB)
    }
   
}
heroes([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
  ]
  
)