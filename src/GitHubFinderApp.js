import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Router } from '@reach/router';

import { Navbar } from './components/layout/Navbar';
import { Users } from './components/users/Users';
import { Home } from './components/pages/Home';

import { GithubState } from './context/github/GithubState';

import './styles.css';

export const GitHubFinderApp = () => {
  return (
    <GithubState>
      <div className="App">
        <Navbar title='GitHub Finder' icon='fab fa-github' />
        <div className="container">
          <Router>
            <Home path="/" />
          </Router>
        </div>
      </div>
    </GithubState>
  );
}
