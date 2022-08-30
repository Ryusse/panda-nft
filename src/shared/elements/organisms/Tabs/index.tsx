import React, { ReactNode, useState, useMemo } from 'react';

import { TabsHeader } from './TabsHeader';

export type TabItem = {
  title: string;
  titleIcon: string;
  content: React.ReactElement;
};

type TabsProps = {
  tabs: TabItem[];
  children: ReactNode;
  onChangeTab?: (props: { idx: number; tab: TabItem }) => void;
};

export const Tabs: React.FC<TabsProps> = ({ tabs, children, onChangeTab }) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const tabHeader = useMemo<string[]>(
    () => tabs.map<any>((tab) => [tab.title, tab.titleIcon]),
    [tabs]
  );

  const handleOnChangeTab = (tabIndex: number) => {
    setActiveTabIndex(tabIndex);
    onChangeTab?.({ idx: tabIndex, tab: tabs[tabIndex]! });
  };

  return (
    <section className="overflow-x-hidden">
      <div
        className={`flex flex-col items-center  lg:flex-row lg:gap-4 ${
          children ? 'justify-between' : 'items-center justify-center'
        }`}
      >
        {children}
        <TabsHeader
          headersTab={tabHeader}
          activeIndex={activeTabIndex}
          onChangeTab={handleOnChangeTab}
        />
      </div>
      <div className="mt-16">{tabs[activeTabIndex]?.content}</div>
    </section>
  );
};
