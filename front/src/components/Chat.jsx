import React, {useState, useEffect} from "react";
import io from "socket.io-client"
import queryString from 'query-string'

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const URL = 'localhost:4000'

    const messageHandler = event => {

        setMessage(event.target.value)
    }
    const sendMessageHandler = event => event.key === 'Enter' ? sendMessage(event) : null
    const sendMessage = event => {
        event.preventDefault()
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    useEffect(() => {
        const {name, room} = queryString.parse(location.search)
        socket = io(URL)
        setName(name)
        setRoom(room)

        socket.emit('join', {name, room},(error) => {
            if(error) {
                console.log('Error', error)
            }
        })
    }, [URL, location.search])

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message])
        })
    })

    console.log(message,messages)

    return (
        <div className='container'>
            <div className='chat-container'>
                <input type="text" value={message} onChange={messageHandler} onKeyPress={sendMessageHandler}/>
            </div>
        </div>
    )
}
export default Chat