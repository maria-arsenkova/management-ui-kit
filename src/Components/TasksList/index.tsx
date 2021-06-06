import React, { useState } from 'react';
import { Task } from '../Task';
import { TaskType } from '../Task/types';
import './style.css';

export type TasksListType = {
  name: string;
  items: TaskType[];
};

interface TasksListProps {
  content: TasksListType[];
  onTaskClick: (task: TaskType) => void;
  onTaskUpdate: (task: TaskType) => void
}

function TasksList({ content, onTaskClick, onTaskUpdate }: TasksListProps) {
  return (
    <div>
      {content.map((list) => {
        return (
          <ul className='tasks__list' key={`${list.name}`}>
            <li className='tasks__title'>
              <span className='tasks__title-text'>{list.name}</span>
              <button type='button' className='tasks__add-task'>
                + Add Task
              </button>
            </li>
            {list?.items &&
              list.items.map((task) => {
                return (
                  <li
                    className='tasks__item'
                    //по id 
                    key={`${task.title}`}
                  >
                    {`${task.isDone}`};
                    {console.log(`${task.isDone}`)};
                    {console.log({task})}
                    <label
                      htmlFor='checkbox'
                      className='tasks__checkbox-new'
                      // className={task.isDone === true? 'tasks__checkbox-new': 'tasks__checkbox-newT'}
                    >
                      <input
                          onChange={(event) => {
                            onTaskUpdate({...task, isDone: event.target.checked})
                          }}
                          type='checkbox'
                          id='checkbox'
                          className='tasks__checkbox-hidden'
                          checked={task.isDone}
                      />
                    </label>
                    <div onClick={() => {
                      onTaskClick(task);
                    }}>
                      <div className='tasks__item-name'>{task.title}</div>
                      <a href='#' className='tasks__item-executor'>
                        <img
                          key={`${task.asignTo.name}_${task.asignTo.avatar}`}
                          src={task.asignTo.avatar}
                          alt={task.asignTo.name}
                          className='tasks__item-avatar'
                        />
                        <span className='tasks__item-position'>
                          {task.department}
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

export { TasksList };
