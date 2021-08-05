import React from "react";
import "./style.scss";
import { UserType } from "./types";
import circle from "./img/circle.svg";

interface UserInfoProps {
  user: UserType;
}

function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="UserInfo">
      <a href="/" className="UserInfo__avatar">
        <img src={user.avatar} alt={user.initials} />
      </a>
      <div>
        <div className="UserInfo__initials">{user.initials}</div>
        {user?.position && (
          <div className="UserInfo__position">{user.position}</div>
        )}
      </div>
      <a href="/" className="circleIcon">
        <img src={circle} alt="circle" />
      </a>
    </div>
  );
}

export { UserInfo };
