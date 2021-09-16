import React, { useState } from "react";
import "./style.scss";
import { TaskDescriptionType } from "./types";
import { Textarea, TEXTAREA_VARIABLE } from "../Textarea";
import { Button, BUTTON_VARIABLE, BUTTON_SIZE } from "../Button";

function TaskDescription({
  description,
  onChangeDescription,
}: TaskDescriptionType) {
  return (
    <div className="TaskDescription">
      <div className="TaskDescription__title">Description</div>
      <div className="TaskDescription__text">{description}</div>
      <Textarea handleDescription={onChangeDescription} value={description} variable={TEXTAREA_VARIABLE.TRANSPARENT}/>
    </div>
  );
}

export { TaskDescription };
