function distanceBetweenPoints(x1, y1, x2, y2) {
//d=(x2−x1)2+(y2−y1)2−−−−−−−−−−−−−−−−−−√
let formula = Math.pow((x2-x1),2) + Math.pow((y2-y1),2)
console.log(Math.sqrt(formula));

}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)