function adAstra(input) {
  let str = input.shift()
  let reg = /([|#])[a-zA-Z\s]+\1\d{2}\/\d{2}\/\d{2}\1([0-9][0-9]?[0-9]?[0-9]?|10000)\1/g
  let match = str.match(reg)
  if (match) {
    let caloriesSum = 0
    for (let line of match) {
      let [item, date, calories] = line.split(/[#|]/g).filter(x => x != '')
      calories = Number(calories)
      caloriesSum += calories
    }
    let possibleDays = Math.floor(caloriesSum / 2000)
    console.log(`You have food to last you for: ${possibleDays} days!`)
    for (let line of match) {
      let [item, date, calories] = line.split(/[#|]/g).filter(x => x != '')
      console.log(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`)
    }
  } else {
    console.log(`You have food to last you for: 0 days!`)
  }

}
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]
)