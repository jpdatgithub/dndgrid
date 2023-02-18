import React from 'react';
import './Toolbar.css'

class Toolbar extends React.PureComponent<Array<string>> {
    constructor(props: Array<string>) {
        super(props);
    }

    render() {
        var renderedToolbuttons = this.props.map((toolbutton, tIndex) => {
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