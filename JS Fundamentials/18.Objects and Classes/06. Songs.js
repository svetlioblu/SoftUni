function songs(arr) {
    let songsCount = Number(arr.shift())
    let typeList = arr.pop()
    class Song {
        constructor(type, name, time) {
            this.type = type
            this.name = name
            this.time = time
        }
    }

    for (let song of arr) {
        let [typeSong, nameSong, timeSong] = song.split('_')
        let currentSong = new Song(typeSong, nameSong, timeSong)

        if (currentSong.type === typeList || typeList === 'all') {
            console.log(currentSong.name)

        } 
        

    }


}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']

)