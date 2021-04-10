import React from 'react';
import './index.css';
import AdditionFaile, { AdditionFaileType } from '../AdditionFaile';
import headerIcon from '../AdditionFaile/img/header.png';
import pdfIcon from '../AdditionFaile/img/pdfIcon.png';

const redesign: AdditionFaileType = {
  preview: pdfIcon,
  name: 'Redesign Brief 2019.pdf',
  size: 159,
};

const header: AdditionFaileType = {
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
        <AdditionFaile content={redesign} />
        <AdditionFaile content={header} />
      </div>
    </div>
  );
}

export default Description;
