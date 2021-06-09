import React, { useState } from 'react';
import './style.css';
import { TaskHeader } from '../TaskHeader';
import { TaskInfoBlock } from '../TaskInfoBlock';

import { TaskDescription } from '../TaskDescription';
import { TaskDiscussion } from '../TaskDiscussion';
import { TaskFiles } from '../TaskFiles';

import { user } from '../Sidebar';
import { TaskType } from './types';
import { CommentType } from '../Comment/types';

export interface TaskProps {
  task: TaskType;
  onTaskChanged: (task: TaskType) => void;
}

function Task({ task, onTaskChanged }: TaskProps) {
  const handleComments = (newComments: CommentType[]) => {
    const newTask: TaskType = { ...task, discussions: newComments };
    onTaskChanged(newTask);
  };

  const removeFile = (id: string) => {
    const newFiles = task.files?.filter((file) => file.id !== id);

    const newTask: TaskType = { ...task, files: newFiles };

    onTaskChanged(newTask);
  };

  return (
    <div className='task'>
      <TaskHeader
        isDone={task.isDone}
        data={task.createdAt}
        creator={task.assigner}
        name={task.title}
        onTaskUpdate={onTaskChanged}
        task={task}
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
                id={item.id}
                preview={item.preview}
                name={item.name}
                size={item.size}
                onRemoveFile={removeFile}
                key={item.id}
                sizeSign={item.sizeSign}
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
        onCommentCreated={handleComments}
      />
    </div>
  );
}

export { Task };
