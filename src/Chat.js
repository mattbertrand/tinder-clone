import React from 'react'
import Avatar from '@material-ui/core/Avatar'

function Chat({ name, message, profilePic, timestamp}) {
    return (
        <div className="chat">
            <Avatar className="chat__image" alt={name} src={profilePic}/>
            <div>
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
                <p>{timestamp}</p>
        </div>
    )
}

export default Chat
