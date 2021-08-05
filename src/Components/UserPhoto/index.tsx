import React from "react";
import "./style.scss";
import { UserType } from "../UserInfo/types";

interface UserPhoto {
  user: UserType;
  type:
    | "Comment__author-photo"
    | "comment__add-author-photo"
    | "userInfo__avatar";
}

const UserPhoto = ({ user, type }: UserPhoto) => {
  let className = "";
  if (type == "Comment__author-photo") {
    className += "Comment__author-photo";
  } else if (type == "comment__add-author-photo") {
    className += "comment__add-author-photo";
  } else {
    className += "userInfo__avatar";
  }
  return <img src={user.avatar} alt={user.initials} className={className} />;
};

export { UserPhoto };
