import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export type TabsType = {
  name: string;
  path: string;
};

interface TabsProps {
  items: TabsType[];
}

function HeaderTabs({ items }: TabsProps) {
  return (
    <div className="tabs">
      {items.map((item) => {
        return (
          item?.name && (
            <Link to={item.path} className="tabs__item">
              {item.name}
            </Link>
          )
        );
      })}
    </div>
  );
}

export default HeaderTabs;
