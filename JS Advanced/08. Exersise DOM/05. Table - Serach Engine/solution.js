function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick)
   let input = document.getElementById('searchField')
   let rows = document.querySelectorAll('tbody tr')
   let isSearched = false
   function onClick() {

      if (isSearched) {
         for (let row of rows) {
            row.removeAttribute('class')
            isSearched = false
         }
      }
      for (let row of rows) {
         if (input.value != '' && row.textContent.includes(input.value)) {
            row.setAttribute('class', 'select')
            isSearched = true
         }
      }
   }
}