import React from 'react';
import './style.css';

export interface AdditionFileProps {
  preview?: string;
  name: string;
  size: number;
}

function AdditionFile({ preview, name, size }: AdditionFileProps) {
  return (
    <div className='addition__file'>
      <div className='addition__file-preview'>{preview}</div>
      <div>
        <div className='addition__file-name'>{name}</div>
        <div>
          <span className='addition__file-size'>{size} KB</span>
          <button className='addition__file-delete'>Delete</button>
        </div>
      </div>
    </div>
  );
}

export { AdditionFile };
