import React from 'react';


const Input = ({ setMessage, sendMessage, message }) => {

    return (

        <form className="message-form">
            <input
                className="message-input"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={event => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="send-button" onClick={event => sendMessage(event)}>Send</button>
        </form>
    )
}

export default Input;