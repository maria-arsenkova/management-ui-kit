import React from 'react';
import './style.css';
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
    <div className='members_wrapper'>
      <div className='members'>
        {members.map((member) => {
          return (
            member?.avatar && (
              <a href='/' className='members__link' key={`${member.name}`}>
                <img
                  className='members__avatar'
                  key={`${member.avatar}_${member.name}`}
                  src={member.avatar}
                  alt={member.name}
                />
              </a>
            )
          );
        })}
      </div>
      <div className='members__share'>
        <span className='members__share-name'>Share</span>
      </div>
      <div className='members__сhat'>
        <a href='/'>
          <img src={chat} alt='chat' />
        </a>
        <span className='members__сhat-name'>Chat</span>
      </div>
    </div>
  );
}

export { Members };
