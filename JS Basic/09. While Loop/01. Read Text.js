function readText(input) {
    let stringCount = input.length
    let i = 0
    let count = 0


    while (i < stringCount) {
        if (input[i] !== 'Stop') {
            count += 1
        }

        i++
    }
    console.log(count);

}
readText(['Nakov','SoftUni','Sofia','Bulgari','SomeTex','Stop'])