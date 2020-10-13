function danceHall(arg1, arg2, arg3) {

    let hallLenghth = Number(arg1)
    let hallWidth = Number(arg2)
    let wаrdrobeSide = Number(arg3)
    // hallArea comes in m and conver to sm2 by multiply with 100
    let hallArea = (hallLenghth * 100) * (hallWidth * 100)
    let wаrdrobeArea = (wаrdrobeSide * 100) * (wаrdrobeSide * 100)
    let bench = hallArea - (9 / 10 * hallArea)

    let danceArea = hallArea - wаrdrobeArea - bench
    let hallDancerCapacity = danceArea / (40 + 7000)

    console.log(Math.floor(hallDancerCapacity))
}
danceHall('50', '25', '2')