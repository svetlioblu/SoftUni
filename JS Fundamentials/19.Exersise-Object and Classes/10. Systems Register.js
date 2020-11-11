function systemRegister(arr) {
    let objAll = {}
    // first create an object from all systems,components and subcomponents with 3 loops

    for (let line of arr) {
        let [system, component, subcomponent] = line.split(' | ')
        objAll[system] = {}
    }
    for (let line of arr) {
        let [system, component, subcomponent] = line.split(' | ')
        objAll[system][component] = []
    }
    for (let line of arr) {
        let [system, component, subcomponent] = line.split(' | ')
        objAll[system][component].push(subcomponent)
    }

    // sort the object(system) per the  primary(component length) and secondary(system alphabet) criteria requirement
    objAll = Object.entries(objAll).sort((a, b) => (Object.keys(b[1]).length - Object.keys(a[1]).length) || (a[0].localeCompare(b[0])))
    // sort components by subcomponents length and print
    
    for (let line of objAll) {
        let system = line.shift()
        console.log(system)
        let components = line.shift()
        let componentsSorted = Object.entries(components).sort((a, b) => b[1].length - a[1].length)
       
        for (let lineTwo of componentsSorted) {
            console.log(`|||${lineTwo[0]}`)
            for (let lineThree of lineTwo[1]) {
                console.log(`||||||${lineThree}`)

            }
        }
    }
    
}


systemRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])