function solve() {
  let input = document.getElementById(`text`).value
  let caseType = document.getElementById('naming-convention').value
  let result = document.getElementById('result')
  let cases = {
    'Camel Case': function (input) {
      input = input.split(' ')
      return input.map((x, i) => {
        if (i > 0) {
          return x[0].toUpperCase() + (x.substring(1).toLowerCase())
        }
        return x.toLowerCase()
      }).join('')
    },
    'Pascal Case': function (input) {
      return input.split(' ')
        .map(x => x[0].toUpperCase() + (x.substring(1).toLowerCase())).join('')
    }
  }

  if (!cases[caseType]) {
    result.textContent = 'Error!'
  } else {
    result.textContent = cases[caseType](input)
  }
}