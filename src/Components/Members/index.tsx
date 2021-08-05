import React from 'react';
import './style.scss';
import chat from './img/chat.svg';
import { UserType } from "../UserInfo/types";
import {UserPhoto, AVATAR_SIZE } from "../UserPhoto"

interface MembersProms {
  members: UserType[];
}

function Members({members}: MembersProms) {
  return (
    <div className='Members'>
      <div className='Members_wrapper'>
        {members.map((member, index) => {
          return (
            member?.avatar && (
                <a href='/' className='Members__member-photo' key={`${members[index].initials}`}>
                   <UserPhoto user={members[index]} size={AVATAR_SIZE.MEDIUM}/>
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
