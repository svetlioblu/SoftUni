function solve() {

  let input = document.getElementsByTagName('textarea')[0]
  let output = document.getElementsByTagName('textarea')[1]
  let generateButton = document.getElementsByTagName('button')[0]
  let buyButton = document.getElementsByTagName('button')[1]

  generateButton.addEventListener('click', (event) => {
    if (input.value != '') {
      let addRow = JSON.parse(input.value)
      addRow.forEach(element => {
        let row = document.createElement('tr')
        let imageTd = document.createElement('td')
        let image = document.createElement('img')
        let src = document.createAttribute('src')
        src.value = element.img
        image.setAttributeNode(src)
        imageTd.appendChild(image)
        let nameTd = document.createElement('td')
        let nameP = document.createElement('p')
        nameP.textContent = element.name
        nameTd.appendChild(nameP)
        let priceTd = document.createElement('td')
        let priceP = document.createElement('p')
        priceP.textContent = element.price
        priceTd.appendChild(priceP)
        let decFactorTd = document.createElement('td')
        let decFactorP = document.createElement('p')
        decFactorP.textContent = element.decFactor
        decFactorTd.appendChild(decFactorP)
        let inputTd = document.createElement('td')
        let inputEl = document.createElement('input')
        let inputAtt = document.createAttribute('type')
        inputAtt.value = 'checkbox'
        inputEl.setAttributeNode(inputAtt)
        inputTd.appendChild(inputEl)
        row.appendChild(imageTd)
        row.appendChild(nameTd)
        row.appendChild(priceTd)
        row.appendChild(decFactorTd)
        row.appendChild(inputTd)
        document.querySelector('tbody').appendChild(row)
      })
    }

  })
  buyButton.addEventListener('click', (event) => {
    let selected = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    let ordered = {
      name: [],
      price: [],
      decFactor: []
    }
    selected.forEach(el => {
      ordered.name.push(el.parentNode.parentNode.querySelector('td:nth-child(2)').textContent)
      ordered.price.push(Number(el.parentNode.parentNode.querySelector('td:nth-child(3)').textContent))
      ordered.decFactor.push(Number(el.parentNode.parentNode.querySelector('td:nth-child(4)').textContent))
    })
    let totalPrice = ordered.price.reduce((a, b) => a + b)
    let avgDecFactor = ordered.decFactor.reduce((a, b) => a + b) / ordered.decFactor.length
    output.value = `Bought furniture: ${ordered.name.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`
  })
}
 // [{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]