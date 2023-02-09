import React, { useState } from 'react'
import classNames from 'classnames'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './TabViewer_new.scss'

export interface ITabProps {
    title: string,
    children: any,
    className?: string
}

export interface ITabViewerProps {
    tabs: Array<ITabProps>,
    tvId: string,
    className?: string
}

function TabViewer(props: ITabViewerProps) {
    const [key, setKey] = useState<string>(props.tvId + "event-key0");

    const tabViewerClassNames = classNames('default-tab-viewer', props.className);

    const tabs = props.tabs.map((tab: ITabProps, index) => {
        const tabClassNames = classNames('default-tab', tab.className)

        return (
            <Tab 
                key={props.tvId + "tab" + String(index)} 
                eventKey={props.tvId + "event-key" + String(index)} 
                title={tab.title}
                tabClassName={tabClassNames}>
                {tab.children.render()}
            </Tab>
        );
    });

  return (
    <Tabs
        id={props.tvId}
        activeKey={key}
        onSelect={(k) => setKey(String(k))}
        className={tabViewerClassNames}
    >
        {tabs}
    </Tabs>
  );
}

export default TabViewer;