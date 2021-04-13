import React from 'react';
import './style.css';
import circle from './img/circle.png';

export type HeadlineType = {
  name: string;
  creator: string;
  data: string;
};

interface HeadlineProps {
  header: HeadlineType;
}

function Headline({ header }: HeadlineProps) {
  return (
    <div className='headline'>
      <div>
        <div className='headline__name'>{header.name}</div>
        <div className='headline__creator'>
          Added by {header.creator} {header.data}
        </div>
      </div>
      <a href='#' className='headline__selector'>
        <input
          type='checkbox'
          id='tick'
          className='headline__selector-hidden'
        />
        <label htmlFor='tick' className='headline__selector-tick'></label>
        <span className='headline__selector-more'>
          <img src={circle} alt='circle' />
        </span>
      </a>
    </div>
  );
}

export default Headline;
