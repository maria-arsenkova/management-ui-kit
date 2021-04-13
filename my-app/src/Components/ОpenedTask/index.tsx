import React from 'react';
import './style.css';
import Headline, { HeadlineType } from '../Headline';
import user from '../InfoBlock/img/user.png';
import userO from '../InfoBlock/img/userO.png';
import userY from '../InfoBlock/img/userY.png';
import userS from '../InfoBlock/img/userS.png';
import InfoBlock, { InfoBlockType } from '../InfoBlock';
import Description, { DescriptionType } from '../Description';
import Discussion from '../Discussion';

const header: HeadlineType = {
  name: 'Find top 5 customer requests',
  creator: 'Kristin A.',
  data: 'yesterday at 12:41pm',
};

const asignTo: InfoBlockType = {
  title: 'Asign To',
  executor: { avatar: user, name: 'Linzell Bowman' },
};

const dueOn: InfoBlockType = {
  title: 'Due On',
  date: 'Tue, Dec 25',
};

const tag: InfoBlockType = {
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

function OpenTask() {
  return (
    <div className='openedTask'>
      <Headline header={header} />
      <div className='infoBlocks'>
        <InfoBlock content={asignTo} />
        <InfoBlock content={dueOn} />
        <InfoBlock content={tag} />
        <InfoBlock content={followers} />
      </div>
      <Description description={description} />
      <Discussion />
    </div>
  );
}

export default OpenTask;
