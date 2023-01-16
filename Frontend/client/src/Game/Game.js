import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

import Board from './Board.js'

/*function updateBoard(currentBoard, updateInfo) {
    return upToDateBoard;
}*/

const Game = () => {
    const [ connection, setConnection ] = useState(null);
    const [ cells, setBoard ] = useState([]);
    const latestBoard = useRef(null);

    //boardHistory.current = board;

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('http://localhost:5191/hubs/game')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => {
                    console.log('Connected!');
    
                    connection.on('BoardUpdate', updateInfo => {
                        const updatedBoard = [...latestBoard.current];
                        //update the board here
                    
                        setBoard(updatedBoard);
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

// <Board cells = {testArray} cellsPerRow = {4}/>
    return (
        <div className='game'>
            
        </div>
    );
}

export default Game;