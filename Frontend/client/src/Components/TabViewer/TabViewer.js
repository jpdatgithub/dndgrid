import React from 'react';
import '../../Css/TabViewerCss/TabViewer.css'

import TabContent from './TabContent.js'

class TabViewer extends React.Component {
  // requer um array de conteudo chamado contentTabs cujos elementos sejam interpretaveis pelo componente TabContent

    constructor(props) {
        super(props)

        this.selectorsDivRef = null;
        this.contentDivRef = null;
    }

    setSelectorDivRef = element => {
      this.selectorsDivRef = element;    
    };

    setContentDivRef = element => {
      this.contentDivRef = element;    
    };

    openTab(selected) {
      if (this.selectorsDivRef && this.contentDivRef) {
        var i, tabContent, tabLinks;
      
        tabContent = this.contentDivRef.children;
        tabLinks = this.selectorsDivRef.children;

        for (i = 0; i < tabContent.length; i++) {
          tabContent[i].style.display = "none";
        }
    
        for (i = 0; i < tabLinks.length; i++) {
          tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }
    
        tabContent[selected].style.display = "block";
        tabLinks[selected].className += " active";
      }
    }

    render() {
      var tabLinks = this.props.contentTabs.map((content, i) => {
         return (
          <button key = {this.props.tvId + "tabLink" + String(i)} className='tab-link' onClick={() => this.openTab(i)}>{content.selectorTitle}</button>
         );
      });

      var renderedContent = this.props.contentTabs.map((content, i) => {
        return (
          <div key = {this.props.tvId + "tabContent" + String(i)} className='tab-content' id={String(i)}>
            <TabContent content={content.text}/>
          </div>
        );
      });

      return (
        <div className='tab-viewer'>
          <div className='tab-selector' ref = {this.setSelectorDivRef}>
            {tabLinks}
          </div>
          <div className='tab-view' ref = {this.setContentDivRef}>
            {renderedContent}
          </div>
        </div>
      );
    }
}

export default TabViewer;