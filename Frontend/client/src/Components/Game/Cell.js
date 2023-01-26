import React from 'react';
import '../../Css/GameCss/Cell.css';

class Cell extends React.PureComponent {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <button className='cell' /* onClick={props.onClick}*/ >
                {this.props.value.occupied ? <img src={process.env.PUBLIC_URL + '/tokens/' + this.props.value.tokenPicId} alt="token" style={{height: "32px", width: "32px"}}/> : <></>}
            </button>
        );
    }
}

export default Cell;