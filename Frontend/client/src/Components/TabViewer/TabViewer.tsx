import React from 'react';
import '../../Css/TabViewerCss/TabViewer.css'

export interface ITabViewerChild {
  render(): JSX.Element
}

export interface ITabViewerProps {
  tabTitles: Array<string>,
  tabContents: Array<ITabViewerChild>,
  tvId: string
}

export interface ITabViewerState {
  selectorsDivRef?: any,
  contentDivRef?: any
}

class TabViewer extends React.Component<ITabViewerProps, ITabViewerState> {
    constructor(props: ITabViewerProps) {
        super(props)

        this.state = {
          selectorsDivRef: React.createRef(),
          contentDivRef: React.createRef()
        }
    }

    openTab(selected: number) {
      if (this.state.selectorsDivRef && this.state.contentDivRef) {
        var i, tabContent, tabLinks;
      
        tabContent = this.state.contentDivRef.current.children;
        tabLinks = this.state.selectorsDivRef.current.children;

        for (i = 0; i < tabContent.length; i++) {
          tabContent[i].style.display = "none";
        }
    
        for (i = 0; i < tabLinks.length; i++) {
          tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }
    
        tabLinks[selected].className += " active";
        tabContent[selected].style.display = "block";
      }
    }

    render() {
      var tabLinks = this.props.tabTitles.map((content, i) => {
         return (
          <button 
          key = {this.props.tvId + "tabLink" + String(i)} 
          className={"tab-link" + ((i == 0) ? " active" : "")}
          onClick={() => this.openTab(i)}
          >
          
          {content}

          </button>
         );
      });

      var renderedContent = this.props.tabContents.map((content, i) => {
        return (
          <div 
          key = {this.props.tvId + "tabContent" + String(i)} 
          className='tab-content' 
          id={String(i)}
          style = {(i == 0) ? {display: 'block'} : {}}
          >

            {content.render()}

          </div>
        );
      });

      return (
        <div className='tab-viewer'>
          <div className='tab-selector' ref = {this.state.selectorsDivRef}>
            {tabLinks}
          </div>
          <div className='tab-view' ref = {this.state.contentDivRef}>
            {renderedContent}
          </div>
        </div>
      );
    }
}

export default TabViewer;