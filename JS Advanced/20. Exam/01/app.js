function solve() {
   const createBtn = document.getElementsByClassName('btn create')[0]
   const author = document.getElementById('creator')
   const title = document.getElementById('title')
   const category = document.getElementById('category')
   const content = document.getElementById('content')

   const archived = document.querySelector('.archive-section ol')


   const posts = document.querySelector('.site-content section')

   createBtn.addEventListener('click', onCreateClick)




   function onCreateClick(e) {
      e.preventDefault()
      let articleTag = document.createElement('article')

      let h1 = document.createElement('h1')
      h1.textContent = title.value
      articleTag.appendChild(h1)

      let p1 = document.createElement('p')
      p1.textContent = 'Category:'
      let strong1 = document.createElement('strong')
      strong1.textContent = category.value
      p1.appendChild(strong1)
      articleTag.appendChild(p1)

      let p2 = document.createElement('p')
      p2.textContent = 'Creator:'
      let strong2 = document.createElement('strong')
      strong2.textContent = author.value
      p2.appendChild(strong2)
      articleTag.appendChild(p2)

      let p3 = document.createElement('p')
      p3.textContent = content.value
      articleTag.appendChild(p3)

      let div = document.createElement('div')
      div.setAttribute('class', 'buttons')
      let deleteBtn = document.createElement('button')
      deleteBtn.setAttribute('class', 'btn delete')
      deleteBtn.textContent = 'Delete'
      div.appendChild(deleteBtn)
      let archiveBtn = document.createElement('button')
      archiveBtn.setAttribute('class', 'btn archive')
      archiveBtn.textContent = 'Archive'
      div.appendChild(archiveBtn)
      articleTag.appendChild(div)

      posts.appendChild(articleTag)
   }

   posts.addEventListener('click', (e) => {
      if (e.target.className == 'btn delete') {
         e.target.parentNode.parentNode.remove()
      }
      if (e.target.className == 'btn archive') {
         let li = document.createElement('li')
         li.textContent = title.value
         archived.appendChild(li)
         e.target.parentNode.parentNode.remove()
      }
   })
  // console.log(Array.from(document.querySelectorAll('.archive-section ol li')))
}
