import React from "react";
import Message from './Message'
const Messages = ({messages,name}) => {
    const messagesParsed = messages.map((message,i )=> <Message key={i}message={message} name={name}/>)
    return(
        <div className='messages'>{messagesParsed}</div>
    )
}
export default Messages