import * as React from 'react';

import '../styles/index.scss';
import type { HeadFC } from 'gatsby';

import { Button, Search } from '../shared/elements/atoms';

const IndexPage = () => {
  return (
    <main>
      <h1 className="bg-red-100">Tailwind</h1>
      <Button />
      <Search />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
