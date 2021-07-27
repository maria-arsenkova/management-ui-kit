import React from 'react';
import './style.css';
import { HeaderСontent } from '../HeaderСontent';
import { HeaderTabs, TabsType } from '../HeaderTabs';

const navbar: TabsType[] = [
  { name: 'Tasks', path: '/tasks' },
  { name: 'Kanban', path: '/kanban' },
  { name: 'Activity', path: '/activity' },
  { name: 'Calendar', path: '/calendar' },
  { name: 'Files', path: '/files' },
];

function Header() {
  return (
    <div className='header'>
      <HeaderСontent />
      <HeaderTabs items={navbar} />
    </div>
  );
}

export { Header };
