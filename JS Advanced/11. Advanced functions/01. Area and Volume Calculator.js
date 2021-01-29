function solve(area, vol, input) {
    input = JSON.parse(input)
    let result = []
    input.forEach(element => {
        let elArea = Math.abs(area.apply(element))
        let elVolume = Math.abs(vol.apply(element))
        result.push({ area: elArea, volume: elVolume })
    })
    return result
}
solve(area, vol, '[{"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"}, {"x":"55","y":"8","z":"0"}, {"x":"100","y":"100","z":"100"}, {"x":"55","y":"80","z":"250"}]')

function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};
