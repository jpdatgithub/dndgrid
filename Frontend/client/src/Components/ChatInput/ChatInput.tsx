import React, { useState } from 'react';

import './ChatInput.css';

export interface IChatInputProps {
    sendMessage: (user: string, message: string) => Promise<void>,
    username: string
}

const ChatInput = (props: IChatInputProps) => {
    const user = props.username;
    const [message, setMessage] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();

        const isUserProvided = user && user !== '';
        const isMessageProvided = message && message !== '';

        if (isUserProvided && isMessageProvided) {
            props.sendMessage(user, message);
        } 
        else {
            alert('Please insert an user and a message.');
        }
    }

    const onMessageUpdate = (e: any) => {
        setMessage(e.target.value);
    }

    return (
        <form className='chat-input'>
            <h2>{props.username}</h2>
            <br />
            <input 
                type="text"
                id="message"
                name="message" 
                value={message}
                onChange={onMessageUpdate} />
            <br/><br/>
            <button onClick={onSubmit}>Submit</button>
        </form>
    )
};

export default ChatInput;