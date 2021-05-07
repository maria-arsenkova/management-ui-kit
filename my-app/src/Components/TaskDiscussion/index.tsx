import React, { useState } from 'react';
import './style.css';
import { UserType } from '../UserInfo/types';
import { Comment } from '../Comment';
import { CommentType } from '../Comment/types';
import { TaskType } from '../Task/types';

export interface TaskDiscussionsProps {
  user: UserType;
  task: TaskType;
  content: CommentType[];
  onCommentCreated: (comments: CommentType[]) => void;
}

function TaskDiscussion({
  user,
  task,
  content,
  onCommentCreated,
}: TaskDiscussionsProps) {
  const [comment, setComment] = useState<CommentType>({
    text: '',
    date: Date.now().toString(),
    name: user.initials,
    photo: user.avatar,
    position: user.position,
  });

  const handleComment = (newComment: string): void => {
    setComment({
      text: newComment,
      name: comment.name,
      photo: comment.photo,
      date: comment.date,
      position: comment.position,
    });
  };

  const createComment = (
    newComment: CommentType,
    allComments: CommentType[]
  ): void => {
    const newComments = [newComment, ...allComments];
    onCommentCreated(newComments);
  };

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
        <button
          className='task__discussion-button'
          onClick={() => {
            createComment(comment, content);
          }}
        >
          Send
        </button>
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
