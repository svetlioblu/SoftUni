function sortNumbers(arg1, arg2, arg3) {
    if (arg1 > arg2 && arg1 > arg3) {
        if (arg2 > arg3) {
            console.log(arg1);
            console.log(arg2);
            console.log(arg3);
        } else {
            console.log(arg1);
            console.log(arg3);
            console.log(arg2);
        }
    }
    if (arg2 > arg1 && arg2 > arg3) {
        if (arg1 > arg3) {
            console.log(arg2);
            console.log(arg1);
            console.log(arg3);
        } else {
            console.log(arg2);
            console.log(arg3);
            console.log(arg1);
        }
    }
    if (arg3 > arg1 && arg3 > arg2) {
        if (arg1 > arg2) {
            console.log(arg3);
            console.log(arg1);
            console.log(arg2);
        } else {
            console.log(arg3);
            console.log(arg2);
            console.log(arg1);
        }
    }
}
sortNumbers(2,1,3)