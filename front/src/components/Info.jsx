import React, {useState, useEffect} from "react";

import onlineIcon from '../icons/online.svg'
import closeIcon from '../icons/close.svg'
import {CopyToClipboard} from "react-copy-to-clipboard";
import queryString from "query-string";

const Info = ({location}) => {
    const URL = 'localhost:4000'
    const [value, setValue] = useState('')
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const {room} = queryString.parse(location.search)
        let link =''
        if (location.hostname !== undefined) {
            link = `${location.hostname}/join&room=${room}`
        }else {
            link = `${URL}/join&room=${room}`
        }

        setValue(link)
    }, [location.search])
    const handleInput = (event) => {
        setValue(event.target.value)
        setCopied(false)
    }
    return (
        <div className="info-container">
            <div className="container-left">
                <img className='online-icon' src={onlineIcon} alt="online"/>
                <h3>Copy to invite:</h3>
                <input value={value}
                       onChange={handleInput}/>
                <div className='copy-container'>
                <CopyToClipboard
                    text={value}
                    onCopy={() => setCopied(true)}>
                    <button>Copy to clipboard</button>
                </CopyToClipboard>
                {copied ? <span style={{color: '#0066cc'}}>Copied.</span> : null}
                </div>
            </div>
            <div className="container-right">
                <a href="/"><img src={closeIcon} alt="close"/></a>
            </div>
        </div>
    )
}
export default Info