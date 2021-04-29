import React from 'react';
import './style.css';

type TaskFilesType = {
  preview?: string;
  name: string;
  size: number;
};

export interface TaskFilesProps {
  content?: TaskFilesType[];
}

function TaskFiles({ content }: TaskFilesProps) {
  return (
    <div className='task__files'>
      {content &&
        content.map((item) => {
          return (
            <div className='task__file'>
              <img
                className='task__file-preview'
                src={item.preview}
                alt={item.name}
              />
              <div>
                <div className='task__file-name'>{item.name}</div>
                <div>
                  <span className='task__file-size'>{item.size} KB</span>
                  <button className='task__file-delete'>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export { TaskFiles };
