function arenaTier(input) {
    let arena = {}
    let gladiator = input.shift()
    while (gladiator != 'Ave Cesar') {
        if (gladiator.includes('vs')) {
            let [glad1, glad2] = gladiator.split(' vs ')
            if (arena.hasOwnProperty(glad1) && arena.hasOwnProperty(glad2)) {
                let technique1 = Object.keys(arena[glad1])
                let technique2 = Object.keys(arena[glad2])
                let duplicatedTechniques = []
                let conacat = technique1.concat(technique2)
                for (let i = 0; i < conacat.length; i++) {
                    for (let j = i + 1; j < conacat.length; j++) {
                        if (conacat[i] == conacat[j]) {
                            duplicatedTechniques.push(conacat[i])
                        }
                    }
                }
                for (let element of duplicatedTechniques) {
                    if (arena[glad1][element] < arena[glad2][element]) {
                        delete arena[glad1]
                        break
                    } else if (arena[glad1][element] > arena[glad2][element]) {
                        delete arena[glad2]
                        break
                    } else if (arena[glad1][element] == arena[glad2][element]) {
                        continue
                    }
                }

            }


        } else {
            let [name, technique, skill] = gladiator.split(' -> ')
            skill = Number(skill)
            if (!arena.hasOwnProperty(name)) {
                arena[name] = {
                    [technique]: skill
                }
            }
            let currentGladSkills = arena[name]
            if (currentGladSkills.hasOwnProperty(technique)) {
                if (currentGladSkills[technique] < skill) {
                    currentGladSkills[technique] = skill
                }

            } else {
                currentGladSkills[technique] = skill
            }

        }
        gladiator = input.shift()
    }
    let sorted = Object.entries(arena).sort((a, b) => {
        let aTotal = Object.entries(a[1]).map(x => x[1]).reduce((a, b) => a + b)
        let bTotal = Object.entries(b[1]).map(x => x[1]).reduce((a, b) => a + b)
        if (aTotal === bTotal) {
            return a[0].localeCompare(b[0])
        }
        return bTotal - aTotal
    })
    for (let element of sorted) {
        element[1] = Object.entries(element[1]).sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0].localeCompare(b[0])
            }
            return b[1] - a[1]
        })
        let totalScore = element[1].map(x => x[1]).reduce((a, b) => a + b)
        console.log(`${element[0]}: ${totalScore} skill`)
        element[1].forEach(element => {
            console.log(`- ${element[0]} <!> ${element[1]}`)
        })
    }

}
arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]
)