import React from 'react';
import './style.css';
import userY from './img/userY.png';
import userT from './img/userT.png';
import userU from './img/userU.png';
import Comment, { CommentType } from '../Comment';

const helena: CommentType = {
  author: { name: 'Helena Brauer', position: 'Designer', photo: userU },
  date: 'Yesterday at 12:37pm',
  text:
    'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
};

const prescott: CommentType = {
  author: { name: 'Prescott MacCaffery', position: 'Developer', photo: userT },
  date: 'Yesterday at 12:37pm',
  text:
    '@Helena Software quality assurance activity in which one or several humans check a program mainly ',
};

function Discussion() {
  return (
    <div>
      <div className='discussion__title'>Discussion</div>
      <div className='comment__add'>
        <img src={userY} alt='userY' className='comment__add-authorPhoto' />
        <input
          type='text'
          placeholder='Add a comment…'
          className='comment__add-text'
        ></input>
      </div>
      <Comment content={helena} />
      <Comment content={prescott} />
    </div>
  );
}

export default Discussion;
