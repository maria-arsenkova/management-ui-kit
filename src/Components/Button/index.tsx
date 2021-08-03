import React from "react";
import "./style.scss";

interface ButtonProps {
  name: string;
  createTask: () => void;
  updateTasks: () => void;
  handleModalClick: () => void;
}

const Button = ({
  createTask,
  updateTasks,
  handleModalClick,
  name,
}: ButtonProps) => {
  return (
    <button
      className="Button"
      onClick={function (event) {
        createTask();
        updateTasks();
        handleModalClick();
      }}
    >
      {name}
    </button>
  );
};

export { Button };
