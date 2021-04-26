import React from 'react';
import './style.css';
import Comment, { CommentProps } from '../Comment';

export interface TaskDiscussionsProps {
  userAcName: string;
  userAcphoto: string;
  content?: CommentProps[];
}

function TaskDiscussion({
  content,
  userAcName,
  userAcphoto,
}: TaskDiscussionsProps) {
  return (
    <div>
      <div className='task__discussion-title'>Discussion</div>
      <div className='comment__add'>
        <img
          src={userAcphoto}
          alt={userAcName}
          className='comment__add-author-photo'
        />
        <input
          type='text'
          placeholder='Add a comment…'
          className='comment__add-text'
        />
      </div>
      {content && (
        <div>
          {content.map((item) => {
            return (
              <Comment
                name={item.name}
                position={item.position}
                photo={item.photo}
                date={item.date}
                text={item.text}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export { TaskDiscussion };
