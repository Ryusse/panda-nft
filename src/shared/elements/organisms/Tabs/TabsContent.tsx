import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { ICard } from '../../../interfaces';

interface Props {
  list: ICard[] | null;
  textEmptyHeader?: string;
  textEmptyBody?: string;
}

export const TabsContent = ({
  list,
  textEmptyHeader,
  textEmptyBody,
}: Props) => {
  return (
    <div>
      {textEmptyHeader && (
        <div className="py-10">
          <StaticImage
            className="mx-auto mb-10"
            placeholder="blurred"
            src="../../../../images/png/empty.png"
            alt="image"
            layout="fixed"
            width={100}
          />
          <h4 className="text-center text-sub-heading-01 font-semibold text-primary-neutral-white ">
            {textEmptyHeader}
          </h4>
          <p className="mt-3 text-center text-paragraph-02">{textEmptyBody}</p>
        </div>
      )}
    </div>
  );
};
