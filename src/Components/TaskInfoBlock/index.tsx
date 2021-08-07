import React from "react";
import "./style.css";
import addIcon from "./img/addIcon.svg";
import { UserType } from "../UserInfo/types";

interface TaskInfoBlockProps {
  title?: string;
  executor?: UserType;
  date?: string;
  department?: string;
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
    <div className="task__info-block">
      <div className="task__info-block-title">{title}</div>
      <div className="task__info-block-content">
        {executor && (
          <a className="executor">
            <img
              src={executor.avatar}
              alt={executor.initials}
              className="task__info-block_icon"
            />
            <span className="executor__initials">{executor.initials}</span>
          </a>
        )}
        {date && <div className="date">{date}</div>}
        {department == "Developement" && (
          <span className="department department_developement">
            {department}
          </span>
        )}
        {department == "Marketing" && (
          <span className="department department_marketing">{department}</span>
        )}
        {department == "Design" && (
          <span className="department department_design">{department}</span>
        )}
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
