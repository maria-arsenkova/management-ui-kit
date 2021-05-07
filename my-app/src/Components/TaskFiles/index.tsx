import React from 'react';
import './style.css';
import { TaskFilesType } from './types';

function TaskFiles({ preview, name, size }: TaskFilesType) {
  return (
    <div className='task__file'>
      <img className='task__file-preview' src={preview} alt={name} />
      <div>
        <div className='task__file-name'>{name}</div>
        <div>
          <span className='task__file-size'>{size} KB</span>
          <button className='task__file-delete'>Delete</button>
        </div>
      </div>
    </div>
  );
}

export { TaskFiles };
