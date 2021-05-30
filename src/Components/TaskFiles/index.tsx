import React, { useState } from 'react';
import './style.css';
import { TaskFilesType } from './types';

export interface TaskFilesProps {
  id: string;
  preview?: string;
  name: string;
  size: number;
  removeFile: (id: string) => void;
}

function TaskFiles({ id, preview, name, size, removeFile }: TaskFilesProps) {
  return (
    <div className='task__file' id={id}>
      <img className='task__file-preview' src={preview} alt={name} />
      <div>
        <div className='task__file-name'>{name}</div>
        <div>
          <span className='task__file-size'>{size} KB</span>
          <button
            className='task__file-delete'
            onClick={() => {
              removeFile(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export { TaskFiles };
