import React from 'react';
import './style.css';
import circle from './img/circle.png';

export interface TaskHeaderProps {
    name: string;
    creator: string;
    data: string;
}

function TaskHeader({ name, creator, data }: TaskHeaderProps) {
  return (
    <div className='headline'>
      <div>
        <div className='headline__name'>{name}</div>
        <div className='headline__creator'>
          Added by {creator} {data}
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

export { TaskHeader };
