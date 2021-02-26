async function loadCommits() {
    const username = document.getElementById('username')
    const repo = document.getElementById('repo')
    const ulCommits = document.getElementById('commits')
    const url = `https://api.github.com/repos/${username.value}/${repo.value}/commits`
    try {
        let response = await fetch(url)
        if (response.status != 200) {
            throw new Error(`${response.status} (${response.statusText})`)
        }
        let data = await response.json()
        ulCommits.innerHTML = ''
        data.forEach(el => {
            let li = document.createElement('li')
            li.textContent = `${el.commit.author.name}: ${el.commit.message}`
            ulCommits.appendChild(li)
        })

    } catch (error) {
        let li = document.createElement('li')
        li.textContent = error
        ulCommits.appendChild(li)
    }

}