const users = []

const addUser = ({id, name, room}) => {
    name = name.toLowerCase()
    const userNameIsTaken = users.find(user => user.room === room && user.name === name)
    if (userNameIsTaken) {
        return {error: 'The username is taken'}
    }
    const user = {id, name, room}
    users.push(user)
    return { user }
}
const removeUser = () => {

}
const getUsers = () => {

}
const getUsersInRoom = () => {

}