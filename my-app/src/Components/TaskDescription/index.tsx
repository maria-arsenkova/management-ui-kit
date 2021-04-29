import React from 'react';
import './style.css';
import { TaskDescriptionType } from './types';

function TaskDescription({ text }: TaskDescriptionType) {
  return (
    <div className='task__description'>
      <div className='task__description-title'>Description</div>
      <div className='task__description-text'>{text}</div>
    </div>
  );
}

export { TaskDescription };
