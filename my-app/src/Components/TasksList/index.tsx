import React from 'react';
import './index.css';

type TasksItemType = {
  name: string;
  executorName: string;
  executorAvatar: string;
  executorPosition: string;
};

export type TasksListType = {
  name: string;
  items?: TasksItemType[];
};

interface TasksListProps {
  content: TasksListType[];
}

function TaskList({ content }: TasksListProps) {
  return (
    <div>
      {content.map((list) => {
        return (
          <ul className='tasks__list'>
            <li className='tasks__title'>
              <span className='tasks__title-text'>{list.name}</span>
              <button type='button' className='tasks__title-addTask'>
                + Add Task
              </button>
            </li>
            {list?.items &&
              list.items.map((task) => {
                return (
                  <li className='tasks__item'>
                    <input
                      type='checkbox'
                      id='checkbox'
                      className='tasks__checkboxHidden'
                    />
                    <label
                      htmlFor='checkbox'
                      className='tasks__checkboxNew'
                    ></label>
                    <div>
                      <div className='tasks__item-name'>{task.name}</div>
                      <a href='#' className='tasks__item-executor'>
                        <img
                          key={`${task.executorName}_${task.executorAvatar}`}
                          src={task.executorAvatar}
                          alt={task.executorName}
                          className='tasks__item-avatar'
                        />
                        <span className='tasks__item-position'>
                          {task.executorPosition}
                        </span>
                      </a>
                    </div>
                  </li>
                );
              })}
          </ul>
        );
      })}
    </div>
  );
}

export default TaskList;
