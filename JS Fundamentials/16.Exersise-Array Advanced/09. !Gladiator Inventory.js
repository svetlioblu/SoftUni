function gladiatorInventory(arr) {
    let equipment = arr.shift().split(' ')

    for (let command of arr) {
        let currentCommand = command.split(' ')[0]
        let currentEquipment = command.split(' ')[1]
        switch (currentCommand) {
            case 'Buy':
                equipment.includes(currentEquipment) ? equipment : equipment.push(currentEquipment)
                break
            case 'Trash':
                equipment.includes(currentEquipment) ? equipment = equipment.filter(x => x != currentEquipment) : equipment
                break
            case 'Repair':
                if (equipment.includes(currentEquipment)) {
                    let index = equipment.indexOf(currentEquipment)
                    let reparedEquipment = equipment.splice(index, 1)
                    equipment.push(reparedEquipment.toString())
                }
                break
            case 'Upgrade':
                let currentEquipmentSplit = currentEquipment.split('-')[0]
                let upgrade = currentEquipment.split('-')[1]

                if (equipment.includes(currentEquipmentSplit)) {
                    let index = equipment.indexOf(currentEquipmentSplit)
                    equipment.splice(index + 1, 0, `${currentEquipmentSplit}:${upgrade}`)

                }
                break
        }
    }
    return equipment.join(' ')

}
console.log(gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
))