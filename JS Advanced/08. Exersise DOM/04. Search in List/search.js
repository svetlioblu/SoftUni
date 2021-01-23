function search() {
   let towns = Array.from(document.getElementById('towns').children)
   let searchBox = document.getElementById('searchText')
   let result = document.getElementById('result')
   let counter = 0

   towns.forEach(el => {
      if (searchBox.value != '' && el.textContent.includes(searchBox.value)) {
         el.style.textDecoration = 'underline'
         el.style.fontWeight = 'bold'
         counter += 1
      }
   })
   result.textContent = `${counter} matches found`
}
