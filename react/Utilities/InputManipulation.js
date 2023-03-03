// Example 1

//then(data => {
    let result = Object.keys(data).map(id => ({ id, ...data[id] }))
// setTodos(result)
    Input:
    {
        '1': { text: 'Give dog a bath', isCompleted: true },
        '2': { text: 'Do laundry', isCompleted: true },
        '3': { text: 'Vacuum floor', isCompleted: false },
        '4': { text: 'Feed cat', isCompleted: true }
    }
    Output:
    [
        { id: '1', text: 'Give dog a bath', isCompleted: true },
        { id: '2', text: 'Do laundry', isCompleted: true },
        { id: '3', text: 'Vacuum floor', isCompleted: false },
        { id: '4', text: 'Feed cat', isCompleted: true }
    ]

// Example2

