import TabContainer from 'react-bootstrap/esm/TabContainer';
import TabPane from 'react-bootstrap/esm/TabPane';
import { PageItem } from 'react-bootstrap';
import React, { useState } from 'react';
import classnames from 'classnames';

import './TabViewer_new2.scss';

export interface ITabPaneProps {
    title: string,
    children: any
}

export interface ITabViewerProps {
    tabs: Array<ITabPaneProps>,
    tvId: string,
    className?: string,
    shadowTopShort?: boolean,
    shadowTopLong?: boolean,
    shadowBottomShort?: boolean,
    shadowBottomLong?: boolean,
    shadowRightShort?: boolean,
    shadowRightLong?: boolean,
    shadowLeftShort?: boolean,
    shadowLeftLong?: boolean
}

export class TabViewerProps implements ITabViewerProps {
  tabs: Array<ITabPaneProps>;
  tvId: string;
  shadowTopShort?: boolean;
  shadowTopLong?: boolean;
  shadowBottomShort?: boolean;
  shadowBottomLong?: boolean;
  shadowRightShort?: boolean;
  shadowRightLong?: boolean;
  shadowLeftShort?: boolean;
  shadowLeftLong?: boolean;

  constructor(props: ITabViewerProps)
  {
    this.tabs = props.tabs;
    this.tvId = props.tvId;
    this.shadowTopShort = props.shadowTopShort;
    this.shadowTopLong = props.shadowTopLong;
    this.shadowBottomShort = props.shadowBottomShort;
    this.shadowBottomLong = props.shadowBottomLong;
    this.shadowRightShort = props.shadowRightShort;
    this.shadowRightLong = props.shadowRightLong;
    this.shadowLeftShort = props.shadowLeftShort;
    this.shadowLeftLong = props.shadowLeftLong;
  }
}

const shadowsDict = {
  "shadow-top-short": ["0 -1px 1px hsl(0deg 0% 0% / 0.075)","0 -2px 2px hsl(0deg 0% 0% / 0.075)","0 -4px 4px hsl(0deg 0% 0% / 0.075)"],
  "shadow-top-long":["0 -8px 8px hsl(0deg 0% 0% / 0.075)","0 -16px 16px hsl(0deg 0% 0% / 0.075)"],
  "shadow-bottom-short":["0 1px 1px hsl(0deg 0% 0% / 0.075)","0 2px 2px hsl(0deg 0% 0% / 0.075)","0 4px 4px hsl(0deg 0% 0% / 0.075)"],
  "shadow-bottom-long":["0 8px 8px hsl(0deg 0% 0% / 0.075)","0 16px 16px hsl(0deg 0% 0% / 0.075)"],
  "shadow-left-short":["-1px 0 1px hsl(0deg 0% 0% / 0.075)","-2px 0 2px hsl(0deg 0% 0% / 0.075)","-4px 0 4px hsl(0deg 0% 0% / 0.075)"],
  "shadow-left-long":["-8px 0 8px hsl(0deg 0% 0% / 0.075)","-16px 0 16px hsl(0deg 0% 0% / 0.075)"],
  "shadow-right-short":["1px 0 1px hsl(0deg 0% 0% / 0.075)","2px 0 2px hsl(0deg 0% 0% / 0.075)","4px 0 4px hsl(0deg 0% 0% / 0.075)"],
  "shadow-right-long":["8px 0 8px hsl(0deg 0% 0% / 0.075)","16px 0 16px hsl(0deg 0% 0% / 0.075)"]
}

function TabViewer(props: ITabViewerProps) {
    const [key, setKey] = useState<string>(props.tvId + "event-key0");

    let paneBoxShadow = new Array<string>;
    //TODO encapsular isso numa função (toda logica de fazer as sombras)
      paneBoxShadow = paneBoxShadow.
      concat(props.shadowBottomShort ? shadowsDict["shadow-bottom-short"] : []).
      concat(props.shadowBottomLong ? shadowsDict["shadow-bottom-long"] : []).
      concat(props.shadowTopShort ? shadowsDict["shadow-top-short"] : []).
      concat(props.shadowTopLong ? shadowsDict["shadow-top-long"] : []).
      concat(props.shadowRightShort ? shadowsDict["shadow-right-short"] : []).
      concat(props.shadowRightLong ? shadowsDict["shadow-right-long"] : []).
      concat(props.shadowLeftShort ? shadowsDict["shadow-left-short"] : []).
      concat(props.shadowLeftLong ? shadowsDict["shadow-left-long"] : []);

    let paginationItems = new Array<any>;
    let tabPanes = props.tabs.map((tab: ITabPaneProps, pIndex) => {
      let tabLinkBoxShadow = new Array<string>;
      tabLinkBoxShadow = tabLinkBoxShadow.
      concat(props.shadowTopShort ? shadowsDict["shadow-top-short"] : []).
      concat(props.shadowTopLong ? shadowsDict["shadow-top-long"] : []).
      concat(props.shadowLeftShort && pIndex === 0 ? shadowsDict["shadow-left-short"] : []).
      concat(props.shadowLeftLong && pIndex === 0 ? shadowsDict["shadow-left-long"] : []).
      concat(props.shadowRightShort && pIndex === props.tabs.length - 1 ? shadowsDict["shadow-right-short"] : []).
      concat(props.shadowRightLong && pIndex === props.tabs.length - 1 ? shadowsDict["shadow-right-long"] : []);

      paginationItems.push(
        <PageItem 
        key={"tab" + String(pIndex)} 
        onClick={() => setKey(props.tvId + "event-key" + String(pIndex))} 
        active={pIndex === Number(key)}
        style={{
          zIndex:(props.tabs.length - pIndex),
          boxShadow: tabLinkBoxShadow.join(",")
        }}
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
        transition={false}
        style={{boxShadow: paneBoxShadow.join(",")}}>
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

export default TabViewer;

