function rightPlace(stringOne, char, stringTwo) {

    let includeCharToString = stringOne.replace('_', char)

    if (includeCharToString === stringTwo) {
        console.log(`Matched`);

    } else {
        console.log(`Not Matched`);

    }


}
rightPlace('Str_ng', 'i', 'String')