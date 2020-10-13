function suppliesForSchool(argument) {
    let chemicals = Number(argument[0])
    let markers = Number(argument[1])
    let deskCleaner = Number(argument[2])
    let discount = Number(argument[3])

    chemicals = chemicals * 5.80
    markers = markers * 7.20
    deskCleaner = deskCleaner * 1.20
    let sum = chemicals + markers + deskCleaner
    discount = sum * discount / 100
    let result = sum - discount

    console.log(result.toFixed(3));
}

suppliesForSchool(['2', '3', '2.5', '25'])
