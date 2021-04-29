import React from 'react';
import './style.css';
import { CommentType } from '../Comment'
import { TaskHeader, TaskHeaderProps } from '../TaskHeader';
import { TaskInfoBlock, TaskInfoBlockProps } from '../TaskInfoBlock';
import { TaskDescription, TaskDescriptionProps } from '../TaskDescription';
import { TaskDiscussion, TaskDiscussionsProps } from '../TaskDiscussion';
import { TaskFiles, TaskFilesProps } from '../TaskFiles';
import { user } from '../Sidebar'

type TaskExecutorType = {
  avatar: string;
  name: string;
};

type TaskFollowersType = {
  avatar: string;
  name: string;
};

type TaskFilesType = {
  preview?: string;
  name: string;
  size: number;
};

export interface TaskProps {
  title: string;
  createdAt: string;
  assigner: string;
  asignTo: TaskExecutorType;
  dueOn: string;
  department: string;
  followers?: TaskFollowersType[];
  description?: string;
  files?: TaskFilesType[];
  discussions?: CommentType[];
  userAcName: string;
  userAcphoto: string;
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
  userAcName,
  userAcphoto,
}: TaskProps) {

  const taskHeader: TaskHeaderProps = {
    name: title,
    creator: assigner,
    data: createdAt,
  };

  const taskInfoBlock: TaskInfoBlockProps = {
    executor: asignTo,
    date: dueOn,
    department: department,
    users: followers,
  };

  const taskDescription: TaskDescriptionProps = {
    text: description,
  };

  const taskFiles: TaskFilesProps = {
    content: files,
  };

  return (
    <div className='task'>
      <TaskHeader
        data={taskHeader.data}
        creator={taskHeader.creator}
        name={taskHeader.name}
      />
      <div className='task__info-blocks'>
        <TaskInfoBlock title={'Asign To'} executor={taskInfoBlock.executor} />
        <TaskInfoBlock title={'Due On'} date={taskInfoBlock.date} />
        <TaskInfoBlock title={'Tag'} department={taskInfoBlock.department} />
        <TaskInfoBlock title={'Followers'} users={taskInfoBlock.users} />
      </div>
      <TaskDescription text={taskDescription.text} />
      <TaskFiles content={taskFiles.content} />
      <div className='task__divider'></div>
      <TaskDiscussion
        content={discussions}
        user={user}
      />
    </div>
  );
}

export { Task };
