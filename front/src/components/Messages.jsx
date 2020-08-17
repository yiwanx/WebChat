import React from "react";
import Message from './Message'
import ScrollToBottom from 'react-scroll-to-bottom';
const Messages = ({messages,name}) => {
    const messagesParsed = messages.map((message,i )=> <Message key={i}message={message} name={name}/>)
    return(
        <ScrollToBottom className='messages'>{messagesParsed}</ScrollToBottom>
    )
}
export default Messages