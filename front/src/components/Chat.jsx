import React, {useState, useEffect} from "react";
import io from "socket.io-client"
import queryString from 'query-string'
import Info from './Info'
import Input from "./Input";
import Messages from './Messages'
let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const URL = 'localhost:4000'




    useEffect(() => {
        const {name, room} = queryString.parse(location.search)
        socket = io(URL)
        setName(name)
        setRoom(room)

        socket.emit('join', {name, room},(error) => {
            if(error) {
                alert(error)
            }
        })
    }, [URL, location.search])

    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message])
        })
    })
    const sendMessage = event => {
        event.preventDefault()
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }
    return (
        <div className='container'>
            <div className='chat-container'>
            <Info location={location}/>
            <Messages messages={messages} name={name}/>
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}
export default Chat