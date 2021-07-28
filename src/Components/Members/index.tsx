import React from 'react';
import './style.scss';
import chat from './img/chat.svg';

export type MembersType = {
  name: string;
  avatar: string;
};

interface MembersProms {
  members: MembersType[];
}

function Members({ members }: MembersProms) {
  return (
    <div className='Members'>
      <div className='Members_wrapper'>
        {members.map((member) => {
          return (
            member?.avatar && (
              <a href='/' className='Members__link' key={`${member.name}`}>
                <img
                  className='Members__avatar'
                  key={`${member.avatar}_${member.name}`}
                  src={member.avatar}
                  alt={member.name}
                />
              </a>
            )
          );
        })}
      </div>
      <div className='Members__share'>
        <span className='Members__share-name'>Share</span>
      </div>
      <div className='Members__сhat'>
        <a href='/'>
          <img src={chat} alt='chat' />
        </a>
        <span className='Members__сhat-name'>Chat</span>
      </div>
    </div>
  );
}

export { Members };
