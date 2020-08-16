import React from "react";

const Message = ({message: {user,text}, name}) => {
    let isSentByCurrent = false
    const lowerCasedName = name.toLowerCase()
    if (user === lowerCasedName) {
        isSentByCurrent = true
    }
    return (
        isSentByCurrent ?
            (
                <div className='message-container message-container__current-user'>
                    <p className='sent-text sent-text__current-user'>{user}</p>
                    <div className='message-box message-box__current-user'>
                        <p className='message-text message-text__current-user'>{text}</p>
                    </div>
                </div>
            )
            :
            (
                <div className='message-container message-container__other-user'>

                    <div className='message-box message-box__other-user'>
                        <p className='message-text message-text__other-user'>{text}</p>
                    </div>
                    <p className='sent-text sent-text__other-user'>{user}</p>
                </div>)
    )
}
export default Message