import React from 'react';
import './style.css';
import { CommentType } from '../Comment/types';
import { TaskHeader } from '../TaskHeader';
import { TaskInfoBlock } from '../TaskInfoBlock';
import {
  TaskInfoBlockExecutorType,
  TaskInfoBlockUsersType,
} from '../TaskInfoBlock/types';
import { TaskDescription } from '../TaskDescription';
import { TaskDiscussion } from '../TaskDiscussion';
import { TaskFiles } from '../TaskFiles';
import { TaskFilesType } from '../TaskFiles/types';
import { user } from '../Sidebar';

export interface TaskProps {
  title: string;
  createdAt: string;
  assigner: string;
  asignTo: TaskInfoBlockExecutorType;
  dueOn: string;
  department: string;
  followers?: TaskInfoBlockUsersType[];
  description?: string;
  files?: TaskFilesType[];
  discussions?: CommentType[];
}

function Task({
  title,
  assigner,
  createdAt,
  asignTo,
  dueOn,
  department,
  followers,
  description,
  files,
  discussions,
}: TaskProps) {
  return (
    <div className='task'>
      <TaskHeader data={createdAt} creator={assigner} name={title} />
      <div className='task__info-blocks'>
        <TaskInfoBlock title={'Asign To'} executor={asignTo} />
        <TaskInfoBlock title={'Due On'} date={dueOn} />
        <TaskInfoBlock title={'Tag'} department={department} />
        <TaskInfoBlock title={'Followers'} users={followers} />
      </div>
      <TaskDescription text={description} />
      {files && (
        <div className='task__files'>
          {files.map((item) => {
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
      <TaskDiscussion content={discussions} user={user} />
    </div>
  );
}

export { Task };
