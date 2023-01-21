import React from 'react';
import '../Css/Game/Board.css'

import Cell from './Cell.js';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var renderedCells = this.props.cells.map((cellRow, rIndex) => {
            return <ul className ='cell-row' key={"row"+String(rIndex)}>{
                cellRow.map((cell, cIndex) => {
                    return <li className="cell-square" key={"cell"+String(rIndex*cellRow.length + cIndex)}><Cell value={cell}/></li>;
                })
            }</ul>;
        });

        return (
            <div className='board'>
                {renderedCells}
            </div>
        );
    }
}

export default Board;