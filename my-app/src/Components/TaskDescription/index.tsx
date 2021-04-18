import React from 'react';
import './style.css';
import { AdditionFile, AdditionFileProps } from '../AdditionFile';
import headerIcon from '../AdditionFile/img/header.png';
import pdfIcon from '../AdditionFile/img/pdfIcon.png';

// const redesign: AdditionFileType = {
//   preview: pdfIcon,
//   name: 'Redesign Brief 2019.pdf',
//   size: 159,
// };

// const header: AdditionFileType = {
//   preview: headerIcon,
//   name: 'Header.png',
//   size: 129,
// };

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
