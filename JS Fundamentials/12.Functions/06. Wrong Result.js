function wrongResult(numOne, numTwo, numThree) {
    let result = numOne * numTwo * numThree
    if(result< 0){
        return console.log(`Negative`);
        
    } else{
        return console.log(`Positive`);
        
    }
}
wrongResult(-6,
    -12,
    14
)