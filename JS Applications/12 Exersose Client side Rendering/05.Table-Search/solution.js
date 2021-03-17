import { html, render } from 'https://unpkg.com/lit-html?module'
const searchBtn = document.querySelector('#searchBtn')
const tbody = document.querySelector('tbody')
const searchField = document.querySelector('#searchField')


let template = (data) => html`
${data.map(x => {
   return html` <tr>
   <td>${x.firstName} ${x.lastName}</td>
   <td>${x.email}</td>
   <td>${x.course}</td>
</tr>`})}
`
update()
searchBtn.addEventListener('click', () => {
   if (searchField.value == '') {
      return alert('The field is empty!')
   }
   Array.from(document.querySelectorAll('tbody tr')).forEach(x => {
      x.removeAttribute('class')
      if (x.textContent.toLowerCase().includes(searchField.value.toLowerCase())) {
         x.setAttribute('class', 'select')
         console.log(x);
         searchField.value = ''
      } 
   })
})

async function update() {
   let getRows = await getContent()
   render(template(getRows), tbody)
}

async function getContent() {
   const url = 'http://localhost:3030/jsonstore/advanced/table'
   const response = await fetch(url)
   if (response.ok) {
      const data = await response.json()
      return Object.values(data)
   } else {
      alert(response.statusText)
   }
}
window.getContent = getContent