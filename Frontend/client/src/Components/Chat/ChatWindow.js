import React from 'react';

import '../../Css/ChatCss/ChatWindow.css';

import Message from './Message';

const ChatWindow = (props) => {
    const chat = props.chat
        .map(m => <Message 
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