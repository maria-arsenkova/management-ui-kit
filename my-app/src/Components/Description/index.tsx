import React from 'react';
import './style.css';
import AdditionFile, { AdditionFileType } from '../AdditionFile'
import headerIcon from '../AdditionFile/img/header.png';
import pdfIcon from '../AdditionFile/img/pdfIcon.png';

const redesign: AdditionFileType = {
  preview: pdfIcon,
  name: 'Redesign Brief 2019.pdf',
  size: 159,
};

const header: AdditionFileType = {
  preview: headerIcon,
  name: 'Header.png',
  size: 129,
};

export type DescriptionType = {
  text: string;
};

interface DescriptionProms {
  description: DescriptionType;
}

function Description({ description }: DescriptionProms) {
  return (
    <div className='description'>
      <div className='description__title'>Description</div>
      <div className='description__text'>{description.text}</div>
      <div className='addition'>
        <AdditionFile content={redesign} />
        <AdditionFile content={header} />
      </div>
    </div>
  );
}

export default Description;
