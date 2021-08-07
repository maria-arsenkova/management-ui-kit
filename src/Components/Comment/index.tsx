import React from "react";
import "./style.scss";
import { CommentProps } from "./types";

function Comment({ author, date, text }: CommentProps) {
  return (
    <div className="Comment">
      <img
        src={author.avatar}
        alt={author.initials}
        className="Comment__author-photo"
      />
      <div className="Comment__content">
        <div className="Comment__title">
          <div>
            <span className="Comment__author-name">{author.initials}, </span>
            <span className="Comment__author-position">{author.position}</span>
          </div>
          <div className="Comment__date">{date}</div>
        </div>
        <div className="Comment__text">{text}</div>
      </div>
    </div>
  );
}

export { Comment };
