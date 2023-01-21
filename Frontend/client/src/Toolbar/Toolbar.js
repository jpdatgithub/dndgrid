import React from 'react';
import Toolbutton from './Toolbutton.js'
import '../Css/Toolbar.css'

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var renderedToolbuttons = this.props.toolbuttons.map((toolbutton, tIndex) => {
            return <li key={"toolbutton"+String(tIndex)}><Toolbutton value={toolbutton}/></li>
        });

        return (
            <ul className='toolbuttonslist'>
                {renderedToolbuttons}
            </ul>
        );
    }
}

export default Toolbar;