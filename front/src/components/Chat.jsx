import React, {useState, useEffect} from "react";
import io from "socket.io-client"
import queryString from 'query-string'

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const URL = 'localhost:4000'
    useEffect(() => {
        const { name, room } = queryString.parse(location.search)

        socket = io(URL)
        setName(name)
        setRoom(room)

        socket.emit('join', { name,room })

        return () => {
            socket.emit('disconnect')
            socket.off()
        }
    }, [URL, location.search])

    return (
        <div>
            Chat
        </div>)
}
export default Chat