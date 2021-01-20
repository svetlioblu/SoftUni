function calory(arr) {
    let obj = {}
    arr.forEach((el, i, array) => {
        if (i % 2 == 0) {
            obj[el] = Number(array[i + 1])
        }
    })
    return obj
}
console.log(calory(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(calory(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));
