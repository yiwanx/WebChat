import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import queryString from 'query-string'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const handleNameChange = event => {
        event.preventDefault()
        setName(event.target.value)
    }
    useEffect(() => {
        const roomName = 'sdf'
        setRoom(roomName)
    },[])

    return (
        <div className="container">
            <form className='create-form'>
                <h1>Sign into existing chat</h1>
                <div className="form-input">
                    <input placeholder="Name"
                           value={name}
                           onChange={handleNameChange}
                    />
                </div>
                <Link onClick={event => (!room || !name) ? event.preventDefault() : null}
                      to={`/chat?name=${name}&room=${room}`}>
                    <button type="submit" text="Sign in" className="btn">Sign In</button>
                </Link>
            </form>
        </div>
    )
}
export default Join