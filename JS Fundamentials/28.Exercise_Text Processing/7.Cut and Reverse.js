function cutAndReverse(str) {
    let str1 = str.substring(0, str.length / 2)
    .split('')
    .reverse()
    .join('')
    let str2 = str.substring(str.length / 2)
    .split('')
    .reverse()
    .join('')

    console.log(str1);
    console.log(str2);
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')