import React from 'react';
import './style.css';
import circle from './img/circle.png';

export type UserType = {
  avatar: string;
  initials: string;
  position?: string;
};

interface UserInfoProps {
  user: UserType;
}

function UserInfo({ user }: UserInfoProps) {
  return (
    <div className='userInfo'>
      <a href='/' className='userInfo__avatar'>
        <img
          src={user.avatar}
          alt={user.initials}
        />
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

export default UserInfo;
