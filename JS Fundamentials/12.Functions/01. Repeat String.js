function repeatString(str, n) {
    let newString = ''

    for (let i = 0; i < n; i++) {
        newString +=str
    }
return console.log(newString);

}
repeatString(`String`, 2)