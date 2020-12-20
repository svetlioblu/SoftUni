function comments(input) {
    let users = []
    let articles = []
    let comments = {}

    for (let line of input) {
        if (line.includes('user ')) {
            let user = line.split(' ')[1]
            if (!users.includes(user)) {
                users.push(user)
            }
        } else if (line.includes('article ')) {
            let article = line.split(' ')[1]
            if (!articles.includes(article)) {
                articles.push(article)
            }
        } else if (line.includes(' posts on ')) {
            let tokens = line.split((': '))
            let user = tokens[0].split(' ')[0]
            let articleName = tokens[0].split(' ')[3]
            let commentTitle = tokens[1].split(', ')[0]
            let commentContent = tokens[1].split(', ')[1]
            if (users.includes(user) && articles.includes(articleName)) {
                if (!comments.hasOwnProperty(articleName)) {
                    comments[articleName] = {}
                }
                comments[articleName][user] = `${commentTitle} - ${commentContent}`

            }
        }
    }
    let sorted = Object.entries(comments).sort((a, b) => {
        let commntsCountA = Object.keys(a[1]).length
        let commntsCountB = Object.keys(b[1]).length
        return commntsCountB - commntsCountA
    })
    sorted.forEach(element => {
        element[1] = Object.entries(element[1]).sort((a, b) => {
            return b[1].localeCompare(a[1])
        })
    })
    for (let line of sorted) {
        console.log(`Comments on ${line[0]}`)
        line[1].forEach(el => console.log(`--- From user ${el[0]}: ${el[1]}`))
    }
}
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])