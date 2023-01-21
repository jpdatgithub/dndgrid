import React from 'react';
import '../Css/Toolbutton.css';

class Cell extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className='toolbutton' /* onClick={props.onClick}*/ >
                {this.props.value}
            </button>
        );
    }
}

export default Cell;