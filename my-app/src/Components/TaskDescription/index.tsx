import React from 'react';
import './style.css';
import { AdditionFile, AdditionFileProps } from '../AdditionFile';

export interface TaskDescriptionProps {
  text: string | undefined;
  files: AdditionFileProps[] | undefined;
}

function TaskDescription({ text, files }: TaskDescriptionProps) {
  return (
    <div className='task__description'>
      <div className='task__description-title'>Description</div>
      <div className='task__description-text'>{text}</div>
      {files && (
        <div className='addition'>
          {files.map((item) => {
            return (
              <AdditionFile
                preview={item.preview}
                name={item.name}
                size={item.size}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export { TaskDescription };
