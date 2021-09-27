import React, { useState, useRef, useEffect } from "react";
import "./style.scss";
import { TaskDescriptionType } from "./types";
import { Textarea, TEXTAREA_VARIABLE } from "../Textarea";
import { Button, BUTTON_SIZE, BUTTON_VARIABLE, BUTTON_TEXT } from "../Button";

function TaskDescription({
  taskDescription,
  onChangeDescription,
}: TaskDescriptionType) {

  const [description, setDescription] = useState<string>("");

  const handleDescription = (newDescription: any) => {
    setDescription(newDescription);
  };

  return (
    <div className="TaskDescription">
      <div className="TaskDescription__title">Description</div>
      <Textarea
        handleDescription={handleDescription}
        value={taskDescription}
        variable={TEXTAREA_VARIABLE.TRANSPARENT}
      />
      
      <div className="TaskDescription__description-control">
        <Button
          size={BUTTON_SIZE.SMALL}
          variable={BUTTON_VARIABLE.SUCCESS}
          onClick={() => onChangeDescription(description)}
        >
          Save
        </Button>
        <Button
          size={BUTTON_SIZE.SMALL}
          variable={BUTTON_VARIABLE.DANGER}
          text={BUTTON_TEXT.WHITE}
          onClick={() => {}}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export { TaskDescription };
