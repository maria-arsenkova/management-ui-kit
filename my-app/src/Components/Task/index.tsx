import React from 'react';
import './style.css';
import {TaskHeader, TaskHeaderProps } from '../TaskHeader';
import user from '../InfoBlock/img/user.png';
import userO from '../InfoBlock/img/userO.png';
import userY from '../InfoBlock/img/userY.png';
import userS from '../InfoBlock/img/userS.png';
import InfoBlock, { InfoBlockType } from '../InfoBlock';
import Description, { DescriptionType } from '../Description';
import Discussion from '../Discussion';

const asignTo: InfoBlockType = {
  title: 'Asign To',
  executor: { avatar: user, name: 'Linzell Bowman' },
};

const dueOn: InfoBlockType = {
  title: 'Due On',
  date: 'Tue, Dec 25',
};

const myTag: InfoBlockType = {
  title: 'Tag',
  department: 'Marketing',
};

const followers: InfoBlockType = {
  title: 'Followers',
  users: [
    { avatar: userO, name: 'Linzell Bowman' },
    { avatar: userY, name: 'Linzell Bowman' },
    { avatar: userS, name: 'Linzell Bowman' },
  ],
};

const description: DescriptionType = {
  text:
    'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
};

export interface TaskProps {
  title: string,
  assigner: string
  createdAt: string
  // TODO: complete other props
}


function Task({title, assigner, createdAt}: TaskProps) {

  const taskHeader: TaskHeaderProps = {
    name: title,
    creator: assigner,
    data: createdAt,
  };

  return (
    <div className='openedTask'>
      <TaskHeader data={taskHeader.data} creator={taskHeader.creator} name={taskHeader.name}/>
      <div className='infoBlocks'>
        <InfoBlock content={asignTo} />
        <InfoBlock content={dueOn} />
        <InfoBlock content={myTag} />
        <InfoBlock content={followers} />
      </div>
      <Description description={description} />
      <Discussion />
    </div>
  );
}

export { Task };
