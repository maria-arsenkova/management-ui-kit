import React from 'react';
import './index.css';
import addIcon from './img/addIcon.png';

type InfoBlockExecutorType = {
  avatar: string;
  name: string;
};

type InfoBlockUsersType = {
  avatar: string;
  name: string;
};

export type InfoBlockType = {
  title: string;
  executor?: InfoBlockExecutorType;
  date?: string;
  department?: string;
  users?: InfoBlockUsersType[];
};

interface InfoBlockProps {
  content: InfoBlockType;
}

function InfoBlock({ content }: InfoBlockProps) {
  return (
    <div className='infoBlock'>
      <div className='infoBlock__title'>{content.title}</div>
      <div className='infoBlock__content'>
        {content?.executor && (
          <a className='executor'>
            <img
              key={`${content.executor.avatar}_${content.executor.name}`}
              src={content.executor.avatar}
              alt={content.executor.name}
              className='infoBlock_icon'
            />
            <span className='executor-initials'>{content.executor.name}</span>
          </a>
        )}
        {content?.date && <div className='date'>Tue, Dec 25</div>}
        {content?.department && <span className='department'>Marketing</span>}
        {content?.users && (
          <span>
            {content.users.map((item) => {
              return (
                <img
                  className='infoBlock_icon'
                  key={`${item.name}_${item.avatar}`}
                  src={item.avatar}
                  alt={item.name}
                />
              );
            })}
            <img src={addIcon} className='infoBlock_icon' />
          </span>
        )}
      </div>
    </div>
  );
}

export default InfoBlock;
