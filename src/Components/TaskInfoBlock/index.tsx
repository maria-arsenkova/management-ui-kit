import React from "react";
import "./style.scss";
import { UserType } from "Components/UserInfo/types";
import {Department, DEPARTMENT} from 'Components/Department'
import { Icon } from "Components/Icon";

interface TaskInfoBlockProps {
  title?: string;
  executor?: UserType;
  date?: string;
  department?: DEPARTMENT;
  users?: UserType[];
}

function TaskInfoBlock({
  title,
  executor,
  date,
  department,
  users,
}: TaskInfoBlockProps) {
  return (
    <div className="TaskInfoBlock">
      <div className="TaskInfoBlock__title">{title}</div>
      <div className="TaskInfoBlock__content">
        {executor && (
          <a className="TaskInfoBlock__executor">
            <img
              src={executor.avatar}
              alt={executor.initials}
              className="TaskInfoBlock__executor-photo"
            />
            <span className="TaskInfoBlock__executor-initials">{executor.initials}</span>
          </a>
        )}
        {date && <div className="TaskInfoBlock__date">{date}</div>}
        {department &&  <Department department={department} /> }
        {users && (
          <span>
            {users.map((item) => {
              return (
                <img
                  className="TaskInfoBlock__member"
                  key={`${item.initials}_${item.avatar}`}
                  src={item.avatar}
                  alt={item.initials}
                />
              );
            })}
            <Icon name='add' />
          </span>
        )}
      </div>
    </div>
  );
}

export { TaskInfoBlock };
