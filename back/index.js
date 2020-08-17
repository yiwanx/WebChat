const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const path = require('path')
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 4000


const {addUser, removeUser, getUser, getUsersInRoom} = require('./controllers/usersController')
const getTime = () => {
    const date = new Date()
    const hour = `${date.getHours()}`
    let minute = `${date.getMinutes()}`
    if (minute.length == 1) {
        minute = '0' + minute
    }
    return `${hour}:${minute}`
}
io.on('connection', (socket) => {
    socket.on('join', ({name, room}, callback) => {
        const {error, user} = addUser({id: socket.id, name, room})
        if (error) return callback(error)

        socket.emit('message', {user: 'admin', text: `${user.name}, welcome to WebChat`, time: getTime()})

        socket.broadcast.to(user.room).emit('message', {user: "admin", text: `${user.name} has just joined WebChat`})

        socket.join(user.room)
        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
        callback()
    })
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)
        if (user) {
            const date = new Date()

            io.to(user.room).emit('message', {user: user.name, text: message, time: getTime()})
            io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
        }

        callback()
    })
    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        if (user) {
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left`})
        }
    });
});


server.listen(PORT, () => console.log(`Server was started. PORT:${PORT}`))