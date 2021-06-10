import React from 'react';
import './style.css';
import circle from './img/circle.svg';
import { TaskHeaderType } from './types';

function TaskHeader({
  name,
  creator,
  data,
  isDone,
  onTaskUpdate,
  task,
}: TaskHeaderType) {
  return (
    <div className='task__header'>
      <div className="task__group">
        <div className='task__header-name'>{name}</div>
        <div className='task__header-creator'>
          Added by {creator} {data}
        </div>
      </div>
      <div className='task__header-selector'>
        <input
          onChange={(event) => {
            onTaskUpdate({
              ...task,
              isDone: event.target.checked,
            });
          }}
          type='checkbox'
          id={`tick-${task.id}`}
          checked={task.isDone}
          className='task__header-selector-hidden'
        />
        <label
          htmlFor={`tick-${task.id}`}
          className={
            isDone === true
              ? 'task__header-selector-tick_active'
              : 'task__header-selector-tick'
          }
        ></label>
        <span className='task__header-selector-tick-more'>
          <img src={circle} alt='circle' />
        </span>
      </div>
    </div>
  );
}

export { TaskHeader };
