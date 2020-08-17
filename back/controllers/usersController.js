const users = []

const addUser = ({id, name, room}) => {
    name = name.toLowerCase()
    const userNameIsTaken = users.find(user => user.room === room && user.name === name)
    if (userNameIsTaken) {
        return {error: 'The username is taken. Go back and choose another username.'}
    }
    const user = {id, name, room}
    users.push(user)
    return {user}
}
const removeUser = id => {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}
const getUser = id => users.find(user => user.id === id)

const getUsersInRoom = room => users.filter(user => user.room === room)

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}