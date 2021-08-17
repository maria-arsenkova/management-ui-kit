import React from "react";
import "./style.scss";
import { TaskDescriptionType } from "./types";

function TaskDescription({ text }: TaskDescriptionType) {
  return (
    <div className='TaskDescription'>
      <div className='TaskDescription__title'>Description</div>
      <div className='TaskDescription__text'>{text}</div>
    </div>
  );
}

export { TaskDescription };
