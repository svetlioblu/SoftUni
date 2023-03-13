const baseUrl = 'http://localhost:3005/api/users'

const getAll = async () => {
    const response = await fetch(baseUrl)
    const result = await response.json()

    return result.users
}

export { getAll }
