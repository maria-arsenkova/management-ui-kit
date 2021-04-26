import React from 'react';
import './style.css';

export interface TaskDescriptionProps {
  text?: string;
}

function TaskDescription({ text }: TaskDescriptionProps) {
  return (
    <div className='task__description'>
      <div className='task__description-title'>Description</div>
      <div className='task__description-text'>{text}</div>
    </div>
  );
}

export { TaskDescription };
