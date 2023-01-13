import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

import Board from './Board.js'

const Game = () => {
    const [ connection, setConnection ] = useState(null);
    const [ board, setBoard ] = useState([]);
    const latestBoard = useRef(null);

    latestBoard.current = board;

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
    
                    /*
                    connection.on('BoardUpdate', updateInfo => {
                        const updatedBoard = [...latestBoard.current];
                        //update the board here
                    
                        setBoard(updatedBoard);
                    });
                    */
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    var testArray = ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'd', 'd', 'd', 'd'];

    return (
        <div className='game'>
            <Board cells = {testArray} cellsPerRow = {4}/>
        </div>
    );
}

export default Game;