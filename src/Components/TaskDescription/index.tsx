import React, { useState } from "react";
import "./style.scss";
import { TaskDescriptionType } from "./types";

function TaskDescription({ description, onChangeDescription }: TaskDescriptionType) {
  

  return (
    <div className="TaskDescription">
      <div className="TaskDescription__title">Description</div>
      <div className="TaskDescription__text">{description}</div>
      <textarea
        placeholder="Add description"
        className="TaskDescription__description"
        onChange={(event) => {
          onChangeDescription(event.target.value);
        }}
      ></textarea>
    </div>
  );
}

export { TaskDescription };
