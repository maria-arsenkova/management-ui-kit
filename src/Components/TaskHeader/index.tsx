import React from "react";
import "./style.scss";
import { TaskHeaderType } from "./types";
import { Icons } from "../Icons";

function TaskHeader({
  name,
  creator,
  data,
  isDone,
  onTaskUpdate,
  task,
}: TaskHeaderType) {
  return (
    <div className="TaskHeader">
      <div className="TaskHeader__group">
        <div className="TaskHeader__name">{name}</div>
        <div className="TaskHeader__creator">
          Added by {creator} {data}
        </div>
      </div>
      <div className="TaskHeader__selector">
        <input
          onChange={(event) => {
            onTaskUpdate({
              ...task,
              isDone: event.target.checked,
            });
          }}
          type="checkbox"
          id={`tick-${task.id}`}
          checked={task.isDone}
          className="TaskHeader__selector-hidden"
        />
        <label
          htmlFor={`tick-${task.id}`}
          className={
            isDone === true
              ? "TaskHeader__selector-tick_active"
              : "TaskHeader__selector-tick"
          }
        ></label>
        <span className="TaskHeader__selector-tick-more">
          <Icons name={"circle"}/>
        </span>
      </div>
    </div>
  );
}

export { TaskHeader };
