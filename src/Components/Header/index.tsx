import React from 'react';
import './style.css';
import HeaderСontent from '../HeaderСontent';
import HeaderTabs, { TapsType } from '../HeaderTabs';

const navbar: TapsType[] = [
  { name: 'Tasks' },
  { name: 'Kanban' },
  { name: 'Activity' },
  { name: 'Calendar' },
  { name: 'Files' },
];

function Header() {
  return (
    <div className='header'>
      <HeaderСontent />
      <HeaderTabs items={navbar} />
    </div>
  );
}

export default Header;
