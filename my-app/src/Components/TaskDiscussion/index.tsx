import React, {useState} from 'react';
import './style.css';
import {UserType} from '../UserInfo/types'
import Comment, { CommentType } from '../Comment';

export interface TaskDiscussionsProps {
  user: UserType
  content?: CommentType[];
}

function TaskDiscussion({
  content,
  user,
}: TaskDiscussionsProps) {
    const [comment, setComment] = useState<CommentType>({
        text: '',
        date: Date.now().toString(),
        name: user.initials,
        photo: user.avatar,
        position: user.position
    })

    const handleComment = (newComment: string): void => {
        setComment({
            text: newComment,
            name: comment.name,
            photo: comment.photo,
            date: comment.date,
            position: comment.position
        })
    }

  return (
    <div>
      <div className='task__discussion-title'>Discussion</div>
      <div className='comment__add'>
        <img
          src={user.avatar}
          alt={user.initials}
          className='comment__add-author-photo'
        />
        <input
          type='text'
          placeholder='Add a comment…'
          className='comment__add-text'
          onChange={(event) => handleComment(event.target.value)}
        />
          <button onClick={() => {}}>Send</button>
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
