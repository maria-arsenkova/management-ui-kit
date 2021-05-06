import React from 'react';
import './style.css';
import { TaskHeader } from '../TaskHeader';
import { TaskInfoBlock } from '../TaskInfoBlock';

import { TaskDescription } from '../TaskDescription';
import { TaskDiscussion } from '../TaskDiscussion';
import { TaskFiles } from '../TaskFiles';

import { user } from '../Sidebar';
import { TaskType } from './types';

export interface TaskProps {
  task: TaskType;
  onTaskChanged: (task: TaskType) => void;
}

function Task({ task, onTaskChanged }: TaskProps) {
  return (
    <div className='task'>
      <TaskHeader
        data={task.createdAt}
        creator={task.assigner}
        name={task.title}
      />
      <div className='task__info-blocks'>
        <TaskInfoBlock title={'Asign To'} executor={task.asignTo} />
        <TaskInfoBlock title={'Due On'} date={task.dueOn} />
        <TaskInfoBlock title={'Tag'} department={task.department} />
        <TaskInfoBlock title={'Followers'} users={task.followers} />
      </div>
      <TaskDescription text={task.description} />
      {task.files && (
        <div className='task__files'>
          {task.files.map((item) => {
            return (
              <TaskFiles
                preview={item.preview}
                name={item.name}
                size={item.size}
              />
            );
          })}
        </div>
      )}
      <div className='task__divider'></div>
      <TaskDiscussion
        user={user}
        task={task}
        content={task.discussions}
        onCommentCreated={onTaskChanged}
      />
    </div>
  );
}

export { Task };
