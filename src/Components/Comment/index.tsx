import React from "react";
import "./style.scss";
import { CommentType } from "./types";

function Comment({ name, photo, date, text, position }: CommentType) {
  return (
    <div className="Comment">
      <img src={photo} alt={name} className="Comment__author-photo" />
      <div className="Comment__content">
        <div className="Comment__title">
          <div>
            <span className="Comment__author-name">{name}, </span>
            <span className="Comment__author-position">{position}</span>
          </div>
          <div className="Comment__date">{date}</div>
        </div>
        <div className="Comment__text">{text}</div>
      </div>
    </div>
  );
}

export { Comment };
