import React, { useEffect, useMemo, useState } from 'react';

import { TabItem, Tabs } from '../../elements/organisms';
import { TabsContent } from '../../elements/organisms/Tabs/TabsContent';
import { ITabList } from '../../interfaces';

export const Section6 = () => {
  const [contentTabs, setContentTabs] = useState<ITabList[]>([]);

  useEffect(() => {
    setContentTabs([
      {
        title: 'Music',
        titleIcon: '🎷',
        list: [],
        textEmptyHeader: 'Nothing to see',
        textEmptyBody: 'Empty text',
      },
      {
        title: 'Art',
        titleIcon: '🎨',
        list: [],
        textEmptyHeader: 'Art',
        textEmptyBody: 'Texto Vacio',
      },
      {
        title: 'Sports',
        titleIcon: '🎳',
        list: [],
        textEmptyHeader: 'Sports',
        textEmptyBody: 'Texto Vacio',
      },
      {
        title: 'Virtual',
        titleIcon: '🤖',
        list: [],
        textEmptyHeader: 'Virtual',
        textEmptyBody: 'Texto Vacio',
      },
      {
        title: 'Videos',
        titleIcon: '📹',
        list: [],
        textEmptyHeader: 'Videos',
        textEmptyBody: 'Texto Vacio',
      },
    ]);
  }, []);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const tabsData = useMemo<TabItem[]>(() => {
    return (
      contentTabs.map((tab) => {
        return {
          title: tab?.title,
          titleIcon: tab?.titleIcon,
          content: (
            <TabsContent
              list={tab?.list || null}
              textEmptyHeader={tab?.textEmptyHeader}
              textEmptyBody={tab?.textEmptyBody}
            />
          ),
        };
      }) ?? []
    );
  }, [contentTabs]);

  return (
    <section className="mb-36">
      <Tabs tabs={tabsData}>
        <h2 className="mb-14 text-center text-heading-04 font-bold text-primary-neutral-white lg:mb-0 lg:text-heading-03">
          Hot NFTs
        </h2>
      </Tabs>
    </section>
  );
};
