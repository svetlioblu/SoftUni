function solve(input) {
    let resultObj = {}
    let formattedOutput = ''
    for (let line of input) {
        let [townName, population] = line.split(' <-> ')
        population = +population
        if (!resultObj[townName]) {
            resultObj[townName] = 0
        }
        resultObj[townName] += population
    }
    for (let key in resultObj) {
        formattedOutput+= `${key} : ${resultObj[key]}\n`
    }
return formattedOutput
}
console.log(solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
));
console.log(`------------------------`);
console.log(solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
));
