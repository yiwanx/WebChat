const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 4000

const {addUser, removeUser, getUser, getUsersInRoom} = require('./controllers/usersController')

io.on('connection', (socket) => {
    socket.on('join', ({name, room}, callback) => {
       const {error, user} = addUser({id: socket.id ,name,room})
        if (error) return callback(error)
        socket.emit('message',{user: 'admin', text: `${user.name} welcome to WebChat`})

        socket.broadcast.to(user.room).emit('message',{user: "admin", text: `${user.name} has just joined WebChat`})

        socket.join(user.room)
        callback()
    })
    socket.on('sendMessage',(message,callback) => {
        const user = getUser(socket.id)

        io.to(user.room).emit('message',{user: user.name, text: message})

        callback()
    })
    socket.on('disconnect', () => {
        console.log('User has left')
    });
});
app.get('/', (req, res) => {
    res.send("Server works")
})

server.listen(PORT, () => console.log(`Server was started. PORT:${PORT}`))