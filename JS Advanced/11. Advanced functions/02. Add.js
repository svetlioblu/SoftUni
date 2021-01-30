function solution(num) {
    return function (y) {
        return num + y
    }
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(6));

// console.log(add5(2));

