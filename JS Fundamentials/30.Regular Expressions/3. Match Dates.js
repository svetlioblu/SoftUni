function matchDates([str]) {
    let reg = /\d{2}([.\-\/])[A-Z][a-z]{2}\1\d{4}/g

    let result = str.match(reg)
    result.forEach(element => {
      let [day,month,year] = element.split(/[\/.\-]/g)  
      console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    })
}
matchDates(["13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"])