// Example 1

const toggleStatus = (id) => {
    setTodos(state => state.map(c => c.id === id ? ({ ...c, isCompleted: !c.isCompleted }) : c))

}