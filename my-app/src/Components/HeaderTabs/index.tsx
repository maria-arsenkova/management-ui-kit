import React from 'react';
import './index.css';

export type TapsType = {
  name: string;
};

interface TabsProps {
  items: TapsType[];
}

function HeaderTabs({ items }: TabsProps) {
  return (
    <div className='tabs'>
      {items.map((item) => {
        return (
          item?.name && (
            <a href='/' className='tabs__item tabs_inactive'>
              {item.name}
            </a>
          )
        );
      })}
    </div>
  );
}

export default HeaderTabs;
