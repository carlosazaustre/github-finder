import React from 'react';

import { Navbar } from './components/layout/Navbar';
import { Users } from './components/users/Users';

export const GitHubFinderApp = () => {
  return (
    <div className="App">
      <Navbar title='GitHub Finder' icon='fab fa-github' />
      <div className="container">
        <Users />
      </div>
    </div>
  );
}
