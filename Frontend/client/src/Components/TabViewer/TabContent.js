import React from 'react';
import '../../Css/TabViewerCss/TabContent.css'

class TabContent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
      return <p>{this.props.content}</p>
    }
}

export default TabContent;