const app = require('express')();
const server = require('http').createServer(app);
const options = { perMessageDeflate: false };
const io = require('socket.io')(server, options);

const PORT = process.env.PORT || 4000

app.get('/', (req,res) => {
    res.send("Server works")
})
io.on('connection', socket => {
    console.log('User connected')
    socket.on('disconnect', () => {
        console.log('User has left')
    })
});

server.listen(PORT, () => console.log(`Server was started. PORT:${PORT}`))