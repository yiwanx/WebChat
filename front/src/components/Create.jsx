import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {v4 as uuidv4} from 'uuid'

const Create = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const handleNameChange = event => {
        event.preventDefault()
        setName(event.target.value)
    }
    useEffect(() => {
        const roomName = uuidv4();
        setRoom(roomName)
    },[])

    return (
        <div className="container">
            <form className='create-form'>
                <h1>Sign in (Create new Room)</h1>
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
export default Create