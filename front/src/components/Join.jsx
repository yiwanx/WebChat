import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";


const Join = ({match}) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    useEffect(() => {
        const room = match.params.room
        setRoom(room)
    },[match.params.room])

    return (
        <div className="container">
            <form className='create-form'>
                <h1>Sign into existing chat</h1>
                <div className="form-input">
                    <input placeholder="Name"
                           value={name}
                           onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <Link onClick={event => (!room || !name) ? event.preventDefault() : null}
                      to={`/chat?name=${name}${room}`}>
                    <button type="submit" className="btn">Sign In</button>
                </Link>
            </form>
        </div>
    )
}
export default Join