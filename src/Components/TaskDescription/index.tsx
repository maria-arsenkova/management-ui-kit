import React, { useState } from "react";
import "./style.scss";
import { TaskDescriptionType } from "./types";
import { Textarea } from "../Textarea";

function TaskDescription({
  description,
  onChangeDescription,
}: TaskDescriptionType) {
  return (
    <div className="TaskDescription">
      <div className="TaskDescription__title">Description</div>
      <div className="TaskDescription__text">{description}</div>
      <Textarea handleDescription={onChangeDescription} value={description}/>
    </div>
  );
}

export { TaskDescription };
