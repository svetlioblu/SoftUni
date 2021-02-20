class Story {
    constructor(title, creator) {
        this.title = title
        this.creator = creator
        this._comments = []
        this._likes = []
        this.idNum = 1
    }
    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }

    like(username) {
        if (this.creator == username) {
            throw new Error(`You can't like your own story!`)
        } else if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`)
        } else {
            this._likes.push(username)
            return `${username} liked ${this.title}!`
        }
    }
    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`)
        } else {
            let index = this._likes.indexOf(username)
            this._likes.splice(index, 1)
            return `${username} disliked ${this.title}`
        }
    }
    comment(username, content, id) {

        if (id == undefined || !this._comments.some(x => x.Id == id)) {
            this._comments.push({ Id: this.idNum, Username: username, Content: content, Replies: [] })
            this.idNum += 1
            return `${username} commented on ${this.title}`
        } else {
            for (let line of this._comments) {
                if (line.Id == id) {
                    line.Replies.push({ Id: Number(`${line.Id}.${line.Replies.length + 1}`), Username: username, Content: content })
                    return `You replied successfully`
                }
            }
        }

    }
    toString(sortingType) {
        let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, `Comments:`]
        if (sortingType == 'asc') {
            for (let com of this._comments) {
                com.Replies.sort((a, b) => a.Id - b.Id)
            }
            this._comments.sort((a, b) => a.Id - b.Id)
        } else if (sortingType == 'desc') {
            for (let com of this._comments) {
                com.Replies.sort((a, b) => b.Id - a.Id)
            }
            this._comments.sort((a, b) => b.Id - a.Id)
        } else if ('username') {
            for (let com of this._comments) {
                com.Replies.sort((a, b) => a.Username.localeCompare(b.Username))
            }
            this._comments.sort((a, b) => a.Username.localeCompare(b.Username))
        }

        this._comments.forEach(element => {
            result.push(`-- ${element.Id}. ${element.Username}: ${element.Content}`)
            if (element.Replies.length != 0) {
                element.Replies.forEach(e => {
                    result.push(`--- ${e.Id}. ${e.Username}: ${e.Content}`)
                })
            }
        })
        return result.join(`\n`)
    }

}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));










