import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

const Chat = () => {
    const [ connection, setConnection ] = useState(null);
    const [ chat, setChat ] = useState([]);
    const latestChat = useRef(null);

    latestChat.current = chat;

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('http://localhost:5191/hubs/chat')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => {
                    console.log('Connected!');
    
                    connection.on('ReceiveMessage', message => {
                        const updatedChat = [...latestChat.current];
                        updatedChat.push(message);
                    
                        setChat(updatedChat);
                        // after updating chat make sure that if the scrollbar is close enough to the end, it'll automatically slide down to show new messages
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    const sendMessage = async (user, message) => {
        const chatMessage = {
            user: user,
            message: message
        };

        try {
            await  fetch('http://localhost:5191/chat/messages', { 
                method: 'POST', 
                body: JSON.stringify(chatMessage),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        catch(e) {
            console.log('Sending message failed.', e);
        }
    }

    return (
        <div className='chat'>
            <ChatInput sendMessage={sendMessage} />
            <hr />
            <ChatWindow chat={chat}/>
        </div>
    );
};

export default Chat;