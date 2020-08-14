const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 4000


io.on('connection', (socket) => {
    console.log('User connected')

    socket.on('join', ({ name, room}, callback) => {
        console.log(name,room)

    })
    socket.on('disconnect', () => {
        console.log('User has left')
    });
});
app.get('/', (req, res) => {
    res.send("Server works")
})

server.listen(PORT, () => console.log(`Server was started. PORT:${PORT}`))