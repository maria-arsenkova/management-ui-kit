import React from 'react';
import './style.css';

export interface CommentProps {
  name: string;
  position: string;
  photo: string;
  date: string;
  text: string;
}

function Comment({ name, photo, date, text, position }: CommentProps) {
  return (
    <div className='comment'>
      <img src={photo} alt={name} className='comment__author-photo' />
      <div className='comment__body'>
        <div>
          <div className='comment__title'>
            <div>
              <span className='comment__author-name'>{name},</span>
              <span className='comment__author-position'>{position}</span>
            </div>
            <div className='comment__date'>{date}</div>
          </div>
          <div className='comment__text'>{text}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
