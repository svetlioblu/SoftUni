function gramophone(bandName, albumName, songName) {
    let songDuration = (albumName.length * bandName.length) * (songName.length / 2)
    console.log(`The plate was rotated ${Math.ceil(songDuration / 2.5)} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')