import React from 'react';
import '../Css/Game/Cell.css';

class Cell extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className='cell' /* onClick={props.onClick}*/ >
                {this.props.value}
            </button>
        );
    }
}

export default Cell;