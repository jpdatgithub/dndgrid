import './Css/App.css';

import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder, HubConnection } from '@microsoft/signalr';

import ChatWindow from './Components/Chat/ChatWindow';
import ChatInput from './Components/Chat/ChatInput';
import { IMessageProps } from './Components/Chat/Message'
import Board from './Components/Game/Board';
import Toolbar from './Components/Toolbar/Toolbar';

import TabViewer from './Components/TabViewer/TabViewer';
import PanelView from './Components/Panel/PanelView';

function App() {
    const [ connection, setConnection ] = useState<HubConnection | null>(null);
    const [ chat, setChat ] = useState<Array<IMessageProps>>(new Array<IMessageProps>);
    const [ board, setBoard ] = useState([]);
    const [ panel, setPanel ] = useState([]);
    const [ tools, setTools ] = useState([]);
    const latestChat = useRef<Array<IMessageProps>>(new Array<IMessageProps>);

    latestChat.current = chat;

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('http://localhost:5191/hubs/Ttm')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => {
                    console.log('Connected!');

                    //fetch initial state here?
                    connection.on('Init', InitData => {
                        
                    });
    
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

    const sendMessage = async (user: string, message: string) => {
        const chatMessage = {
            user: user,
            message: message
        };

        try {
            await  fetch('http://localhost:5191/ttm/messages', { 
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

    var testBoardRendering = [
        [
            {
                occupied: true,
                tokenPicId: "token_1.png"
            }
        ]
    ]

    const panelTestContent = [
        {
            selectorTitle: 'titleA',
            text: 'a'
        },
        {
            selectorTitle: 'titleB',
            text: 'b'
        }
    ]

    const toolbarTabTitles = [
        "Character",
        "Hand",
        "Game Master"
    ]

    const panelTabTitles = [
        "Self",
        "Target"
    ]

    const panelId = "panel";
    
    var testTools = {
        toolbuttons: ["attacks", "spells", "skills", "saving throws", "inventory"]
    }
    var testTools2 = {
        toolbuttons: ["Add token", "test"]
    }
    var testTools3 = {
        toolbuttons: ["New map", "new layer", "pull players"]
    }
    var toolsContentList = [
        new Toolbar(testTools),
        new Toolbar(testTools2),
        new Toolbar(testTools3)
    ]

    const tokenPropsTest1 = [
        {
            name: "Health Points",
            value: 19
        },
        {
            name: "Armor Class",
            value: 10
        }
    ]

    const tokenPropsTest = [
        {
            name: "Health Points",
            value: 20
        },
        {
            name: "Armor Class",
            value: 13
        }
    ]

    var testPanel1 = {
        tokenPicId: "token_1.png",
        tokenProps: tokenPropsTest,
        pvId: "pv1"
    }

    var testPanel2 = {
        tokenPicId: "token_1.png",
        tokenProps: tokenPropsTest1,
        pvId: "pv2"
    }

    const multiplePanelsTest = [
        new PanelView(testPanel1),
        new PanelView(testPanel2)
    ]

    const chatInputProps = {
        'sendMessage': sendMessage
    }

    return (
      <div className="base-structure">
        <div className='game'>
            <Board cells={testBoardRendering}/>
        </div>
        <div className="panel">
            <TabViewer tabTitles = {panelTabTitles} tabContents = {multiplePanelsTest} tvId = "panelstabs"/>
        </div>
        <div className="tools">
            <TabViewer tabTitles = {toolbarTabTitles} tabContents = {toolsContentList} tvId = "toolstabs"/>
        </div>
        <div className='chat'>
          <ChatInput {...chatInputProps} />
          <hr />
          <ChatWindow chat={chat}/>
        </div>
      </div>
    );
}

export default App;