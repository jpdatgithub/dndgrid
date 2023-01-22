import React from 'react';
import '../../Css/TabViewerCss/TabViewer.css'

import TabContent from './TabContent.js'

class TabViewer extends React.Component {
  // requer um array de conteudo chamado contentTabs cujos elementos sejam interpretaveis pelo componente TabContent
  // requer um contentDivId único na página

    constructor(props) {
        super(props)
    }

    openTab(selected) {
        var i, contentDiv, tabContent, selectorsDiv, tabLinks, thisTV;
      
        thisTV = document.getElementById("tv" + this.props.contentDivId)
        
        contentDiv = thisTV.getElementById(this.props.contentDivId);
        tabContent = contentDiv.getElementsByClassName("tab-content")
        for (i = 0; i < tabContent.length; i++) {
          tabContent[i].style.display = "none";
        }
      
        selectorsDiv = thisTV.getElementById("tab-selector");
        tabLinks = selectorsDiv.getElementsByClassName("tab-link");
        for (i = 0; i < tabLinks.length; i++) {
          tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }
      
        contentDiv.getElementById(selected).style.display = "block";
        selectorsDiv.getElementById(i).className += " active";
      } 

    render() {
      var tabLinks = this.props.contentTabs.map((content, i) => {
         return (
          <button className='tab-link' onClick={this.openTab(i)}>{content.selectorTitle}</button>
         );
      });

      var renderedContent = this.props.contentTabs.map((content, i) => {
        return (
          <div className='tab-content' id={String(i)}>
            <TabContent content={content}/>
          </div>
        );
      });

      return (
        <div className='tab-viewer' id ={"tv"+this.props.contentDivId}>
          <div id='tab-selector'>
            {tabLinks}
          </div>
          <div id={this.props.contentDivId}>
            {renderedContent}
          </div>
        </div>
      );
    }
}

export default TabViewer;