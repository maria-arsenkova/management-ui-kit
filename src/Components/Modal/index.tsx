import React, { useState } from 'react';
import './style.css';
import close from './img/close.svg';

interface modalProps {
  onCreateTaskClick: () => void;
}

const Modal = ({onCreateTaskClick}: modalProps) => {
  const [taskTitle, setTitle] = useState<string>('');
  const [taskDescription, setDescription] = useState<string>('');

  return (
    <div className='modal'>
      <div className='modal__header'>
        <div>Add a New Task</div>
        <img src={close} alt='close' onClick={onCreateTaskClick} className="modal__img"/>
      </div>
      <div className='modal__block-name'>
        <div className='modal__name'>Name</div>
        <div>
          <input
            className='modal__name-task-input'
            type='text'
            onChange={(event) => {
              console.log(event);
            }}
          ></input>
        </div>
      </div>
      <div className='modal__block-description'>
        <div className='modal__name'>Description</div>
        <div>
          <textarea className='modal__name-task-textarea'></textarea>
        </div>
      </div>
      <button className='modal__button'>Create Task</button>
    </div>
  );
};

export { Modal };
