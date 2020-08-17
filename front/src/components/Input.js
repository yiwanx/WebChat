import React from 'react';


const Input = ({ setMessage, sendMessage, message }) => {
    const onChange = event => {
        event.preventDefault()
        setMessage(event.target.value)
    }
    const onKeyPress = event => {

        return event.key === 'Enter' ? sendMessage(event) : null
    }
    return (

        <form className="message-form">
            <input
                className="message-input"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button className="send-button" onClick={event => sendMessage(event)}>Send</button>
        </form>
    )
}

export default Input;