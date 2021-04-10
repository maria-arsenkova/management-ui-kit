import { type } from 'os';
import React from 'react';
import './index.css';

type CommentAuthorType = {
  name: string;
  position: string;
  photo: string;
};

export type CommentType = {
  author: CommentAuthorType;
  date: string;
  text: string;
};

interface CommentProps {
  content: CommentType;
}

function Comment({ content }: CommentProps) {
  return (
    <div className='comment'>
      <img
        key={`${content.author.photo}_${content.author.name}`}
        src={content.author.photo}
        alt={content.author.name}
        className='comment__author-photo'
      />
      <div className='comment__body'>
        <div>
          <div className='comment__title'>
            <div>
              <span className='comment__author-name'>
                {content.author.name},
              </span>
              <span className='comment__author-position'>
                {content.author.position}
              </span>
            </div>
            <div className='comment__date'>{content.date}</div>
          </div>
          <div className='comment__text'>{content.text}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
