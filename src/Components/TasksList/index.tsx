import React, { useState } from "react";
import { Task } from "../Task";
import { TaskType } from "../Task/types";
import "./style.scss";
import { Button, BUTTON_SIZE } from "../Button";
import { Department, DEPARTMENT } from "../Department";

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
                name={"+ Add Task"}
                onClick={onCreateTaskClick}
                size={BUTTON_SIZE.MEDIUM}
              />
              {/* <button
                type='button'
                className='TasksList__add-task'
                onClick={onCreateTaskClick}
              >
                + Add Task
              </button> */}
            </li>
            {list?.items &&
              list.items.map((task) => {
                return (
                  <li className="TasksList__item" key={task.id}>
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
                        {task.department == "Developement" && (
                          <Department
                            name={task.department}
                            department={DEPARTMENT.DEVELOPEMENT}
                          />
                        )}
                        {task.department == "Marketing" && (
                          <Department
                            name={task.department}
                            department={DEPARTMENT.MARKETING}
                          />
                        )}
                        {task.department == "Design" && (
                          <Department
                            name={task.department}
                            department={DEPARTMENT.DESIGN}
                          />
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
