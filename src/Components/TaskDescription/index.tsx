import React, { useState } from "react";
import "./style.scss";
import { TaskDescriptionType } from "./types";
import { Textarea, TEXTAREA_VARIABLE } from "../Textarea";

function TaskDescription({
  description,
  onChangeDescription,
}: TaskDescriptionType) {
  return (
    <div className="TaskDescription">
      <div className="TaskDescription__title">Description</div>
      <Textarea handleDescription={onChangeDescription} value={description} variable={TEXTAREA_VARIABLE.TRANSPARENT}/>
    </div>
  );
}

export { TaskDescription };
