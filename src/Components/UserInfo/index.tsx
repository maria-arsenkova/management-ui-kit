import React from 'react';
import './style.css';
import { UserType } from './types';
import circle from './img/circle.svg';

interface UserInfoProps {
  user: UserType;
}

function UserInfo({ user }: UserInfoProps) {
  return (
    <div className='userInfo'>
      <a href='/' className='userInfo__avatar'>
        <img src={user.avatar} alt={user.initials} />
      </a>
      <div>
        <div className='userInfo__initials'>{user.initials}</div>
        {user?.position && (
          <div className='userInfo__position'>{user.position}</div>
        )}
      </div>
      <a href='/' className='circleIcon'>
        <img src={circle} alt='circle' />
      </a>
    </div>
  );
}

export { UserInfo };
