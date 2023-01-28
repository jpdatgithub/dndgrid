import React from 'react';
import '../../Css/ToolbarCss/Toolbar.css'

import Toolbutton from './Toolbutton.js'

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var renderedToolbuttons = this.props.toolbuttons.map((toolbutton, tIndex) => {
            return <li key={"toolbutton"+String(tIndex)}><Toolbutton value={toolbutton}/></li>
            /*TODO change this toolbuton string above to something unique, maybe an idprop like the tab viewer */
        });

        return (
            <ul className='toolbuttonslist'>
                {renderedToolbuttons}
            </ul>
        );
    }
}

export default Toolbar;