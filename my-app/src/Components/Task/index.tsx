import React from 'react';
import './style.css';
import { TaskHeader, TaskHeaderProps } from '../TaskHeader';
import { TaskInfoBlock, TaskInfoBlockProps } from '../TaskInfoBlock';
import { TaskDescription, TaskDescriptionProps } from '../TaskDescription';
import Discussion from '../Discussion';

// на типы заблочить Task

type TaskExecutorType = {
  avatar: string;
  name: string;
};

type TaskFollowersType = {
  avatar: string;
  name: string;
};

type TaskFilesType = {
  preview: string;
  name: string;
  size: number;
};

export interface TaskProps {
  title: string;
  createdAt: string;
  assigner: string;
  // TODO: complete other props
  asignTo: TaskExecutorType;
  dueOn: string;
  department: string;
  followers?: TaskFollowersType[];
  description?: string;
  files?: TaskFilesType[];
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
    files: files,
  };

  return (
    <div className='openedTask'>
      <TaskHeader
        data={taskHeader.data}
        creator={taskHeader.creator}
        name={taskHeader.name}
      />
      <div className='infoBlocks'>
        <TaskInfoBlock title={'Asign To'} executor={taskInfoBlock.executor} />
        <TaskInfoBlock title={'Due On'} date={taskInfoBlock.date} />
        <TaskInfoBlock title={'Tag'} department={taskInfoBlock.department} />
        <TaskInfoBlock title={'Followers'} users={taskInfoBlock.users} />
      </div>
      <TaskDescription
        text={taskDescription.text}
        files={taskDescription.files}
      />
      <Discussion />
    </div>
  );
}

export { Task };
