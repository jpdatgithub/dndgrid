import React from 'react';
import './Toolbar.css'

export interface IToolbarProps {
    toolbuttons: Array<string>
}

class Toolbar extends React.PureComponent<IToolbarProps> {
    constructor(props: IToolbarProps) {
        super(props);
    }

    render() {
        var renderedToolbuttons = this.props.toolbuttons.map((toolbutton, tIndex) => {
            return <li key={"toolbutton"+String(tIndex)}><button>{toolbutton}</button></li>
            /*TODO change this toolbuton string above to something unique, maybe an idprop like the tab viewer */
        });

        return (
            <div className='toolbuttonslist'>
                {renderedToolbuttons}
            </div>
        );
    }
}

export default Toolbar;

// div
//      li
//      li
//      li
// div