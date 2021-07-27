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
  content,
  onCommentCreated,
}: TaskDiscussionsProps) {
  const [comment, setComment] = useState<CommentType>({
    id: '',
    text: '',
    date: '',
    name: user.initials,
    photo: user.avatar,
    position: user.position,
  });

  const handleComment = (
    newComment: string,
    newId: string,
    newDate: string
  ): void => {
    setComment({
      id: newId,
      text: newComment,
      name: comment.name,
      photo: comment.photo,
      date: newDate,
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
          onChange={(event) =>
            handleComment(
              event.target.value,
              Date.now().toString(),
              new Date().toLocaleDateString('en-GB', {
                weekday: 'short',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                // second: 'numeric',
              })
            )
          }
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
                id={item.id}
                name={item.name}
                position={item.position}
                photo={item.photo}
                date={item.date}
                text={item.text}
                //когда один и тот же текст — сбой с ключами — они дублируются  (к примеру отправить два раза один и тот-же текст)
                //onChange — когда изменяем форму, обновляет хук, а когда на баттон то публикует, если текст один и тот-же то хук не обновляется (к примеру отправить два раза один и тот-же текст)
                key={item.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export { TaskDiscussion };
