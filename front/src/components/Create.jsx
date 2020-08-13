import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import '../../App.css'
const Create = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const handleNameChange = event => setName(event.target.value)
    const handleRoomChange = event => setRoom(event.target.value)
    return (
        <div className="container">
            <div className="form">
            <h1>Sign in (Create new Room)</h1>
            <div>
                <input placeholder="Name"
                value={name}
                onChange={handleNameChange}
            />
            </div>
            <Link onClick={event => (!room || !name) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button type="submit" text="Sign in">Sign In</button>
            </Link>
            </div>
        </div>
    )
}
export default Create