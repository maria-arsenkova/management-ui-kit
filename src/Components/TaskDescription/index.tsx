import React, { useState, useEffect } from "react";
import "./style.scss";
import { TaskDescriptionType } from "./types";
import { Textarea, TEXTAREA_VARIABLE } from "Components/Textarea";
import { Button, BUTTON_SIZE, BUTTON_VARIABLE, BUTTON_TEXT } from "Components/Button";

function TaskDescription({
  taskDescription,
  onSave,
  onChange,
}: TaskDescriptionType) {
  const [isShowActions, setShowActions] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");

  const handleDescription = (newDescription: any) => {
    setDescription(newDescription);
    onChange(newDescription);
  };

  useEffect(() => {
    if (taskDescription) {
      setDescription(taskDescription);
    }
  }, [taskDescription]);

  return (
    <div className="TaskDescription">
      <div className="TaskDescription__title">Description</div>
      <Textarea
        onFocus={() => {
          setShowActions(true);
        }}
        onBlur={() => {
          description === taskDescription
            ? setShowActions(!isShowActions)
            : setShowActions(true);
        }}
        handleDescription={handleDescription}
        value={description}
        variable={TEXTAREA_VARIABLE.TRANSPARENT}
        
      />
      {isShowActions && (
        <div className="TaskDescription__description-control">
          <Button
            size={BUTTON_SIZE.SMALL}
            variable={BUTTON_VARIABLE.SUCCESS}
            onClick={() => {
              onSave(description);
              setShowActions(!isShowActions);
            }}
            isDisabled={description === taskDescription}
          >
            Save
          </Button>
          <Button
            size={BUTTON_SIZE.SMALL}
            variable={BUTTON_VARIABLE.DANGER}
            text={BUTTON_TEXT.WHITE}
            onClick={() => {
              setDescription(taskDescription ? taskDescription : "");
              setShowActions(!isShowActions);
            }}
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}

export { TaskDescription };
