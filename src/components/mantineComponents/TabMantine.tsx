import { Tabs } from '@mantine/core';
import React from 'react';

interface TabItem {
  value: string;
  label: string;
  content?: React.ReactNode;
}

interface TabMantineProps {
  tabs: TabItem[];
  defaultValue?: string;
}

const TabMantine: React.FC<TabMantineProps> = ({ tabs, defaultValue }) => {
  return (
    <Tabs defaultValue={defaultValue || tabs[0]?.value}>
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.value} value={tab.value}>
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {tabs.map((tab) => (
        <Tabs.Panel key={tab.value} value={tab.value} pt="xs">
          {tab.content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

export default TabMantine;
