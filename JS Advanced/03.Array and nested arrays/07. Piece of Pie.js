function solve(arr, start, end) {
    return arr.slice(arr.indexOf(start), arr.indexOf(end) + 1)
}
console.log(solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));