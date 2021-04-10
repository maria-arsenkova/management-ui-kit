import React from 'react';
import './index.css';

export type AdditionFaileType = {
  preview?: string;
  name: string;
  size: number;
};

interface AdditionFaileProps {
  content: AdditionFaileType;
}

function AdditionFaile({ content }: AdditionFaileProps) {
  return (
    <div className='addition__faile'>
      <div className='addition__faile-preview'></div>
      <div>
        <div className='addition__faile-name'>{content.name}</div>
        <div>
          <span className='addition__faile-size'>{content.size} KB</span>
          <button className='addition__faile-delete'>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default AdditionFaile;
