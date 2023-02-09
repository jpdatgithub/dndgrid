import React, { useState } from 'react';

import './ChatInput.css';

export interface ISendMessage {
    sendMessage: (user: string, message: string) => Promise<void>
}

const ChatInput = (props: ISendMessage) => {
    const [user, setUser] = useState('');
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

    const onUserUpdate = (e: any) => {
        setUser(e.target.value);
    }

    const onMessageUpdate = (e: any) => {
        setMessage(e.target.value);
    }

    return (
        <form className='chat-input'
            onSubmit={onSubmit}>
            <label htmlFor="user">User:</label>
            <br />
            <input 
                id="user" 
                name="user" 
                value={user}
                onChange={onUserUpdate} />
            <br/>
            <label htmlFor="message">Message:</label>
            <br />
            <input 
                type="text"
                id="message"
                name="message" 
                value={message}
                onChange={onMessageUpdate} />
            <br/><br/>
            <button>Submit</button>
        </form>
    )
};

export default ChatInput;