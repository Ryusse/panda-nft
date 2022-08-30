import React from 'react';

import Icon from '../../atoms/icon';

interface Props {
  headersTab?: string[];
  onChangeTab?: (tabIndex: number) => void;
  classTab?: string;
  activeIndex?: number;
}

export const TabsHeader = ({
  headersTab,
  onChangeTab,
  classTab,
  activeIndex,
}: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap">
      {headersTab &&
        headersTab.map((headerTab, index) => (
          <div key={index} className="flex">
            {headerTab[0] && (
              <button
                onClick={() => onChangeTab && onChangeTab(index)}
                className={`rounded-[8px] border border-primary-blue-300 px-8 py-4 font-medium text-primary-neutral-white duration-200 ease-in-out hover:bg-primary-blue-300 ${
                  index === activeIndex
                    ? 'bg-primary-blue-300 shadow-01'
                    : 'bg-others-blueTransparency-50'
                }`}
                //onClick={() => onChangeTab(index)}
              >
                {headerTab[1] && <span className="mr-2">{headerTab[1]}</span>}
                {headerTab[0]}
              </button>
            )}
          </div>
        ))}
    </div>
  );
};
