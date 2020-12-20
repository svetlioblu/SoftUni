function modernTimes(str) {
    let reg = /#[A-z]+/g
  str.match(reg).forEach(element => {
        element = element.substring(1)
        console.log(element)
    })
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')