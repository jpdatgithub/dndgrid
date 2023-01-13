import React from 'react';

function Cell(props) {
    return (
        <button className='cell' /* onClick={props.onClick}*/ >
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    getRow(cells, cellsPerRow, index) {
        const rowStart = index * cellsPerRow;
        return cells.slice(rowStart, rowStart + cellsPerRow)
    }

    getAllRows(cells, cellsPerRow) {
        var allRows = [];
        const rowsPerBoard = cells.length / cellsPerRow;
        for (let i = 0; i < rowsPerBoard; i++) {
            allRows.concat(this.getRow(cells, cellsPerRow, i));
        }

        return allRows;
    }

    renderCell(x, y) {
        const cellIndex = (y * x) + x;

        return (
            <Cell
                value = {this.props.cells[cellIndex]}
                // onClick={() => this.props.onClick(cellIndex)}
            />
        );
    }

    renderCellRow(row, rowIndex) {
        const cellRow = row.map(cell => (
            <li /*key={}*/>{this.renderCell(cell, rowIndex)}</li>
        ));

        return (
            <ul className='eachRow'>{cellRow}</ul>
        );
    }

    renderRows(rowsPassed) {
        const rowsRendered = rowsPassed.map(row => (
            <li /*key={a}*/>{this.renderCellRow(row, rowsPassed.indexOf(row))}</li>
        ));

        return (
            <ul className='allRows'>{rowsRendered}</ul>
        );
    }

    render() {


        return (
            <div className='board'>
                {
                    this.renderRows(this.getAllRows(this.props.cells, this.props.cellsPerRow))
                }
            </div>
        );
    }
}

export default Board;