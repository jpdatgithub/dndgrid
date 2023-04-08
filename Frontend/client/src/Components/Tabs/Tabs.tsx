import TabContainer from 'react-bootstrap/esm/TabContainer';
import TabPane from 'react-bootstrap/esm/TabPane';
import { PageItem } from 'react-bootstrap';
import React, { useState } from 'react';

import './Tabs.scss';

export interface ITabPaneProps {
    title: string,
    children: any
}

export interface ITabViewerProps {
    tabs: Array<ITabPaneProps>,
    tvId: string,
    className?: string,
}

export class TabViewerProps implements ITabViewerProps {
  tabs: Array<ITabPaneProps>;
  tvId: string;

  constructor(props: ITabViewerProps)
  {
    this.tabs = props.tabs;
    this.tvId = props.tvId;
  }
}



function Tabs(props: ITabViewerProps) {
    const [key, setKey] = useState<string>(props.tvId + "event-key0");

    let paginationItems = new Array<any>;
    let tabPanes = props.tabs.map((tab: ITabPaneProps, pIndex) => {
      paginationItems.push(
        <PageItem 
        key={"tab" + String(pIndex)} 
        onClick={() => setKey(props.tvId + "event-key" + String(pIndex))} 
        active={pIndex === Number(key)}
        >
          {tab.title}
        </PageItem>,
      );

      return (
        <TabPane 
        bsPrefix='pane'
        key={"pane" + String(pIndex)}
        eventKey={props.tvId + "event-key" + String(pIndex)} 
        unmountOnExit={true} 
        transition={false}>
            {tab.children.render()}
        </TabPane>
      );
    });

    return (
        <div className='tab-viewer d-flex flex-column'>
            <div className='tab-list d-inline-flex'>
              {paginationItems}
            </div>
            <TabContainer id={props.tvId} activeKey={key}>
              {tabPanes}
            </TabContainer>
        </div>
    );
}

export default Tabs;