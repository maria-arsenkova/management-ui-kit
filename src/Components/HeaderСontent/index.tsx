import React from 'react';
import './style.css';
import { HeaderLogo } from '../HeaderLogo';
import { Members, MembersType } from '../Members';
import userN from '../Members/img/userN.png';
import userTen from '../Members/img/userTen.png';
import userEl from '../Members/img/userEl.png';

const members: MembersType[] = [
  { name: 'userN', avatar: userN },
  { name: 'userTen', avatar: userTen },
  { name: 'userEl', avatar: userEl },
];

function HeaderСontent() {
  return (
    <div className='header__сontent'>
      <HeaderLogo />
      <Members members={members} />
    </div>
  );
}

export { HeaderСontent };
