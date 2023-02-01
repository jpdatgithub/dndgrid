import React from 'react';
import '../../Css/PanelCss/PanelView.css'

export interface ITokenProp {
    name: string,
    value: number
}

export interface IPanelViewProps {
    tokenProps: Array<ITokenProp>,
    tokenPicId: string,
    pvId: string
}

class PanelView extends React.PureComponent<IPanelViewProps> {
    constructor(props: IPanelViewProps) {
        super(props)
    }

    render() {
        var tokenProps = this.props.tokenProps.map((tokenProp, i) => {
            return (
                <p key = {this.props.pvId + "tokenprop" + String(i)} className='token-prop' style={{display: 'inline-block'}}>
                    {tokenProp.name}: {tokenProp.value}
                </p>
            );
         });

        return (
            <div className='panel-view'>
                <div className='token-view display-flex-centerized'>
                    <img src={process.env.PUBLIC_URL + '/tokens/' + this.props.tokenPicId} alt="Nothing to show here" style={{height: "128px", width: "128px"}}/>
                </div>
                <div className='token-props-view display-flex-centerized'>
                    {tokenProps}
                </div>
                <div className='token-conditions-view'>

                </div>
            </div>
        )
    }
}

export default PanelView;