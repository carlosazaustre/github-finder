import React from 'react';

import { Navbar } from './components/layout/Navbar';
import { UserItem } from './components/users/UserItem';

export const GitHubFinderApp = () => {
  return (
    <div className="App">
      <Navbar title='GitHub Finder' icon='fab fa-github' />
      <UserItem />
    </div>
  );
}
