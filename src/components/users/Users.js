import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { GithubContext } from '../../context/github/githubContext';
import { UserItem } from './UserItem';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export const Users = () => {
  const { loading, users } = useContext(GithubContext);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={userStyle}>
      {
        users.map(user => (
          <UserItem key={user.id} user={user} />
        ))
      }
    </div>
  )
};
