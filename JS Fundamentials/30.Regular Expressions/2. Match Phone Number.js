function matchPhoneNumber([str]) {
let reg =/\+359([ ,-])2\1\d{3}\1\d{4}\b/g
let result = str.match(reg).join(', ')
console.log(result)

}
matchPhoneNumber(["+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"])