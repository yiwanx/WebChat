import React from "react";
import onlineIcon from '../icons/online.svg'
import ScrollToBottom from 'react-scroll-to-bottom';

const Users = ({users}) => {
    if (users['users'] !== undefined) {
        return (
            <div className='users-container'>
                <h1>People currently chatting:</h1>
                <ScrollToBottom  className="active-container">

                        {users['users'].map(({name}) => (
                            <div key={name} className="active-item">
                                {name}
                                <img className='online-icon' alt="Online Icon" src={onlineIcon}/>
                            </div>
                        ))}

                </ScrollToBottom>

            </div>
        )
    }
    return <div></div>
}
export default Users