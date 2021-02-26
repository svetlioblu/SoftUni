function loadRepos() {
	let input = document.getElementById('username')
	let ul = document.getElementById('repos')

	let url = `https://api.github.com/users/${input.value}/repos`

	fetch(url)
		.then(response => {
			if (response.status != 200 || !response.ok) {
				throw new Error('user Not Found')
			} else {
				return response.json()
			}
		})
		.then(data => {
			ul.textContent = ''
			data.forEach(el => {
				let li = document.createElement('li')
				let a = document.createElement('a')
				a.setAttribute('href', `${el.html_url}`)
				a.textContent = el.full_name
				li.appendChild(a)
				ul.appendChild(li)
			})
		})
		.catch(error => {
			let li = document.createElement('li')
			li.textContent = error
			ul.appendChild(li)
		})

}

//testnakov
//<li>
/*{ <a href="{repo.html_url}">
{repo.full_name}
</a>
</li> }*/