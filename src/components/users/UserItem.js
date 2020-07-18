import React, { useState } from 'react'

export const UserItem = () => {
  const [profile, setProfile] = useState({
    id: 1,
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo',
  });

  return (
    <div className="card text-center">
      <img
        src={profile.avatar_url}
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{profile.login}</h3>
      <div>
        <a href={profile.html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  )
}

