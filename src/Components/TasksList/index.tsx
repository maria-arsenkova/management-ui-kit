import React from "react";
import { Button, BUTTON_SIZE, BUTTON_VARIABLE } from "../Button";
import { Department, DEPARTMENT } from "../Department";
import { TaskType } from "../Task/types";
import "./style.scss";

export type TasksListType = {
  name: string;
  items: TaskType[];
};

interface TasksListProps {
  content: TasksListType[];
  onTaskClick: (task: TaskType) => void;
  onTaskUpdate: (task: TaskType) => void;
  onCreateTaskClick: () => void;
}

function TasksList({
  content,
  onTaskClick,
  onTaskUpdate,
  onCreateTaskClick,
}: TasksListProps) {
  return (
    <div>
      {content.map((list) => {
        return (
          <ul className="TasksList" key={list.name}>
            <li className="TasksList__title">
              <span className="TasksList__title-text">{list.name}</span>
              <Button
                onClick={onCreateTaskClick}
                size={BUTTON_SIZE.MEDIUM}
                variable={BUTTON_VARIABLE.SUCCESS}
              >
                + Add Task
              </Button>
            </li>
            {list?.items &&
              list.items.map((task) => {
                return (
                  <li
                    key={task.id}
                    className={`TasksList__item ${
                      task.openedTask
                        ? "TasksList__item_active"
                        : "TasksList__item_inactive"
                    }`}
                  >
                    <label
                      htmlFor={`checkbox-${task.id}`}
                      className={
                        task.isDone
                          ? "TasksList__checkbox-new_active"
                          : "TasksList__checkbox-new"
                      }
                    >
                      <input
                        onChange={(event) => {
                          onTaskUpdate({
                            ...task,
                            isDone: event.target.checked,
                          });
                        }}
                        type="checkbox"
                        id={`checkbox-${task.id}`}
                        className="TasksList__checkbox-hidden"
                        checked={task.isDone}
                      />
                    </label>
                    <div
                      onClick={() => {
                        onTaskClick(task);
                      }}
                    >
                      <div className="TasksList__item-name">{task.title}</div>
                      <a href="#" className="TasksList__item-executor">
                        <img
                          key={`${task.asignTo.initials}_${task.asignTo.avatar}`}
                          src={task.asignTo.avatar}
                          alt={task.asignTo.initials}
                          className="TasksList__item-avatar"
                        />
                        {task.department && (
                          <Department department={task.department} />
                        )}
                      </a>
                    </div>
                  </li>
                );
              })}
          </ul>
        );
      })}
    </div>
  );
}

export { TasksList };
