function solve() {
   let parent = document.querySelector('.shopping-cart')
   let textarea = document.getElementsByTagName('textarea')[0]
   let checkOut = document.getElementsByClassName('checkout')[0]
   parent.addEventListener('click', onClick)


   let products = {}
   function onClick(ev) {
      if (ev.target.nodeName == 'BUTTON' && ev.target.className == 'add-product') {
         
         let productName = ev.target.parentNode.parentNode.querySelector('.product-title').textContent
         let price = Number(ev.target.parentNode.parentNode.querySelector('.product-line-price').textContent)
         if (products[productName]) {
            products[productName] += price
         } else {
            products[productName] = price
         }

         textarea.value += `Added ${productName} for ${price.toFixed(2)} to the cart.` + '\n'
      } else if (ev.target.nodeName == 'BUTTON' && ev.target.className == 'checkout') {
         let sum = Object.values(products).reduce((a, b) => a + b, 0)
         textarea.value += `You bought ${Object.keys(products).join(', ')} for ${sum.toFixed(2)}.`
         Array.from(document.querySelectorAll('button')).map(el => el.disabled = true)
      }
   }
}