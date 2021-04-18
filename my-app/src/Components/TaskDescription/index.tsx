import React from 'react';
import './style.css';
import { AdditionFile, AdditionFileProps } from '../AdditionFile';
import headerIcon from '../AdditionFile/img/header.png';
import pdfIcon from '../AdditionFile/img/pdfIcon.png';

type TaskDescriptionFileType = {
  preview: string;
  name: string;
  size: number;
};

export interface TaskDescriptionProps {
  text: string | undefined;
  files: TaskDescriptionFileType[] | undefined;
}

function TaskDescription({ text, files }: TaskDescriptionProps) {
  return (
    <div className='description'>
      <div className='description__title'>Description</div>
      <div className='description__text'>{text}</div>
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
