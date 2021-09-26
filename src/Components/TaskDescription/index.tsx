import React, { useState } from "react";
import "./style.scss";
import { TaskDescriptionType } from "./types";
import { Textarea, TEXTAREA_VARIABLE } from "../Textarea";
import { Button, BUTTON_SIZE, BUTTON_VARIABLE, BUTTON_TEXT  } from "../Button";

function TaskDescription({
  description,
  onChangeDescription,
}: TaskDescriptionType) {
  return (
    <div className="TaskDescription">
      <div className="TaskDescription__title">Description</div>
      <Textarea
        handleDescription={onChangeDescription}
        value={description}
        variable={TEXTAREA_VARIABLE.TRANSPARENT}
      />
       <div className="TaskDescription__description-control">
      <Button size={BUTTON_SIZE.SMALL} variable={BUTTON_VARIABLE.SUCCESS} onClick={() => onChangeDescription}>Save</Button>
      <Button size={BUTTON_SIZE.SMALL} variable={BUTTON_VARIABLE.DANGER} text={BUTTON_TEXT.WHITE}  onClick={() => onChangeDescription}>Cancel</Button>
      </div>
    </div>
  );
}

export { TaskDescription };
