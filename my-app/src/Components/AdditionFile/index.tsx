import React from 'react';
import './style.css';

export type AdditionFileType = {
  preview?: string;
  name: string;
  size: number;
};

interface AdditionFileProps {
  content: AdditionFileType;
}

function AdditionFile({ content }: AdditionFileProps) {
  return (
    <div className='addition__file'>
      <div className='addition__file-preview'></div>
      <div>
        <div className='addition__file-name'>{content.name}</div>
        <div>
          <span className='addition__file-size'>{content.size} KB</span>
          <button className='addition__file-delete'>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default AdditionFile;
