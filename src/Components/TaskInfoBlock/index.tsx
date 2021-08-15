import React from "react";
import "./style.scss";
import addIcon from "./img/addIcon.svg";
import { UserType } from "../UserInfo/types";
import {Department, DEPARTMENT} from '../Department'

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
              className="TaskInfoBlock__executor-icon"
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
                  className="task__info-block_icon"
                  key={`${item.initials}_${item.avatar}`}
                  src={item.avatar}
                  alt={item.initials}
                />
              );
            })}
            <img src={addIcon} className="task__info-block_icon" />
          </span>
        )}
      </div>
    </div>
  );
}

export { TaskInfoBlock };
