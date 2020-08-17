import React, {useState, useEffect} from "react";
import io from "socket.io-client"
import queryString from 'query-string'
import Info from './Info'
import Input from "./Input";
import Messages from './Messages'
import Users from './Users'
let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState([])
    const [message, setMessage] = useState('')
    const URL = 'localhost:4000'
    let dependency = location.hostname ? location.search:URL

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

    }, [dependency, location.search])

    useEffect(() => {

        socket.on('message', message => {
            setMessages(messages => [...messages, message])
        })
        socket.on('roomData', users => {
            setUsers(users)
        })
    },[])
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
            <Users users={users}/>
        </div>
    )
}

export default Chat