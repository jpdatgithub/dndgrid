import React from 'react';
import './Board.css'

import Cell, {ICellProps} from '../Cell/Cell';


interface IBoardProps {
    cells: Array<Array<ICellProps>>
}

class Board extends React.Component<IBoardProps> {
    constructor(props: IBoardProps) {
        super(props);
    }

    render() {
        var renderedCells = this.props.cells.map((cellRow, rIndex) => {
            return <ul className ='cell-row' key={"row"+String(rIndex)}>{
                cellRow.map((cell, cIndex) => {
                    return <li className="cell-square" key={"cell"+String(rIndex*cellRow.length + cIndex)}><Cell {...cell}/></li>;
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