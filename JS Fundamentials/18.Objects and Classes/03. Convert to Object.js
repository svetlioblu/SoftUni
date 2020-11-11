function convertoObject(json) {
let person = JSON.parse(json)

for(let key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`);
    
}

}
convertoObject('{"name": "George", "age": 40, "town": "Sofia"}')