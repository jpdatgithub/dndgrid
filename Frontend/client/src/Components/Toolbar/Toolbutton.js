import React from 'react';
import '../../Css/ToolbarCss/Toolbutton.css';

class Toolbutton extends React.PureComponent {
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

export default Toolbutton;