import React from 'react';
import '../../Css/TabViewerCss/TabContent.css'

class TabContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      return this.props.child.render();
    }
}

export default TabContent;