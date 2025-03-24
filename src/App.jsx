import React from 'react';
import { useState } from 'react';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const onTabSelected = tabId => setActiveTabId(tabId);
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${activeTab.title}`}</h1>

      <Tabs
        data-cy="TabsComponent"
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
