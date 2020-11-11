function inventory(arr) {
    class Hero {
        constructor(hero, level, items, ) {
            this.Hero = hero
            this.level = level
            this.items = items
        }
    }
    let allHeroes = []
    for (let hero of arr) {
        let [name, level, items] = hero.split(' / ')
        items = items.split(', ')
            .sort((a, b) => a.localeCompare(b))
            .join(', ')
        allHeroes.push(new Hero(name, Number(level), items))
    }

    allHeroes.sort((a, b) => a.level - b.level)

    for (let hero of allHeroes) {
        let keys = Object.keys(hero)
        let firstHero = keys.shift()
        console.log(`${firstHero}: ${hero[firstHero]}`)

        for (let key of keys) {

            console.log(`${key} => ${hero[key]}`)
        }
    }

}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
)