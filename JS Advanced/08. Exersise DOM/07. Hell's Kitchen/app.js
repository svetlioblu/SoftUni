function solve() {
	document.getElementById('btnSend').addEventListener('click', onClick)
	let input = document.querySelector('#inputs textarea')
	let bestRestaurantOutput = document.querySelector('#bestRestaurant p')
	let bestWorkersOutput = document.querySelector('#workers p')

	function onClick() {
		
		if (input.value != '') {
	
			let inputArr = JSON.parse(input.value)
			let restaurants = {}
			for (let line of inputArr) {
				//["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
				let [restaurant, ...workers] = line.split(' - ')
				if (!restaurants[restaurant]) {
					restaurants[restaurant] = {}
				}
				workers[0].split(', ').forEach(element => {
					let [worker, salary] = element.split(' ')
					salary = Number(salary)
					restaurants[restaurant][worker] = salary
				})
			}
			let avgBest = 0
			let bestRestaurant = Object.entries(restaurants).sort(([nameA, paramsA], [nameB, paramsB]) => {
				let sumA = Object.values(paramsA).reduce((a, b) => a + b) / Object.values(paramsA).length
				let sumB = Object.values(paramsB).reduce((a, b) => a + b) / Object.values(paramsB).length
				sumA > sumB ? avgBest = sumA : sumB
				return sumB - sumA
			})[0]
			let bestWorkers = Object.entries(bestRestaurant[1]).sort((a, b) => b[1] - a[1])
			bestRestaurantOutput.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${avgBest.toFixed(2)} Best Salary: ${bestWorkers[0][1].toFixed(2)}`
			bestWorkers.forEach(el => {
				bestWorkersOutput.textContent += `Name: ${el[0]} With Salary: ${el[1]} `
			})
			
		}
	}
}
//["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660", "Other - Peter1 500, George2 300, Mark3 800"]
//["Other - Peter1 500, George2 300, Mark3 800", "PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]