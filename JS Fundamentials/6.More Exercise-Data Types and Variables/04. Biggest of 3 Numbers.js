function biggestOfThreeNumbers(x, y, z) {
    let max_val = 0;
    if (x > y) {
        max_val = x;
    } else {
        max_val = y;
    }
    if (z > max_val) {
        max_val = z;
    }
    console.log(max_val)

}
biggestOfThreeNumbers(0,
    -2,
    -6
)