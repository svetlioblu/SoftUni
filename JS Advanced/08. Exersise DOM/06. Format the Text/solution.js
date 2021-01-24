function solve() {
  let input = document.getElementById('input')
  let output = document.getElementById('output')

  if (output.value != '') {
    let tokens = input.value.split('.')
      .filter(x => x != '')
      .map(x => x.trim() + '.')

    for (let i = 0; i < tokens.length; i++) {
      if (i % 3 === 0) {
        output.innerHTML += `<p>${tokens[i]}</p>`
      } else {
        output.lastChild.textContent += `${tokens[i]}`
      }
    }
  }
}