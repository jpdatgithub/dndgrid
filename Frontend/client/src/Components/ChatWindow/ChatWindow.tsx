import React from 'react';

import './ChatWindow.css';

import Message from '../Message/Message';

export interface IChatWindowProps {
    chat: any
}

const ChatWindow = (props: IChatWindowProps) => {
    const chat = props.chat
        .map((m: any) => <Message 
            key={Date.now() * Math.random()}
            user={m.user}
            message={m.message}/>);

    return(
        <div className='chat-window'>
            {chat}
        </div>
    )
};

export default ChatWindow;