import React from 'react';
import './style.css';
import addIcon from './img/addIcon.png';

type TaskInfoBlockExecutorType = {
  avatar: string;
  name: string;
};

type TaskInfoBlockUsersType = {
  avatar: string;
  name: string;
};

export interface TaskInfoBlockProps {
  title?: string;
  executor?: TaskInfoBlockExecutorType;
  date?: string;
  department?: string;
  users?: TaskInfoBlockUsersType[];
}

function TaskInfoBlock({
  title,
  executor,
  date,
  department,
  users,
}: TaskInfoBlockProps) {
  return (
    <div className='taskInfoBlock'>
      <div className='taskInfoBlock__title'>{title}</div>
      <div className='taskInfoBlock__content'>
        {executor && (
          <a className='executor'>
            <img
              src={executor.avatar}
              alt={executor.name}
              className='taskInfoBlock_icon'
            />
            <span className='executor-initials'>{executor.name}</span>
          </a>
        )}
        {date && <div className='date'>{date}</div>}
        {department && <span className='department'>{department}</span>}
        {users && (
          <span>
            {users.map((item) => {
              return (
                <img
                  className='taskInfoBlock_icon'
                  key={`${item.name}_${item.avatar}`}
                  src={item.avatar}
                  alt={item.name}
                />
              );
            })}
            <img src={addIcon} className='taskInfoBlock_icon' />
          </span>
        )}
      </div>
    </div>
  );
}

export { TaskInfoBlock };
