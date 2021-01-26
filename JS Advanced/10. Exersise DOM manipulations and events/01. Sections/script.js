function create(words) {
   let content = document.getElementById('content')
   words.forEach(element => {
      let currentDiv = document.createElement('div')
      let currentP = document.createElement('p')
      currentP.textContent = element
      currentP.style.display = 'none'
      currentDiv.appendChild(currentP)
      content.appendChild(currentDiv)
   })
   Array.from(content.children).map(el => {
      el.addEventListener('click', onClick)
   })
   function onClick(ev) {
      ev.target.children[0].style.display=''
   }
}