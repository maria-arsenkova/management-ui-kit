import React from 'react';
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
}

function TasksList({ content, onTaskClick }: TasksListProps) {
  return (
    <div>
      {content.map((list) => {
        return (
          <ul className='tasks__list'>
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
                    onClick={() => {
                      onTaskClick({
                        title: task.title,
                        createdAt: task.createdAt,
                        assigner: task.assigner,
                        asignTo: task.asignTo,
                        dueOn: task.dueOn,
                        department: task.department,
                        followers: task.followers,
                        description: task.description,
                        files: task.files,
                        discussions: task.discussions,
                      });
                    }}
                  >
                    <input
                      type='checkbox'
                      id='checkbox'
                      className='tasks__checkbox-hidden'
                    />
                    <label
                      htmlFor='checkbox'
                      className='tasks__checkbox-new'
                    ></label>
                    <div>
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
