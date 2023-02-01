import React from 'react';
import '../../Css/GameCss/Cell.css';

export interface ICellProps {
    occupied: boolean,
    tokenPicId: string
}

class Cell extends React.PureComponent<ICellProps> {
    constructor(props: ICellProps) {
        super(props);
        
    }

    render() {
        return (
            <button className='cell' /* onClick={props.onClick}*/ >
                {this.props.occupied ? <img src={process.env.PUBLIC_URL + '/tokens/' + this.props.tokenPicId} alt="token" style={{height: "32px", width: "32px"}}/> : <></>}
            </button>
        );
    }
}

export default Cell;