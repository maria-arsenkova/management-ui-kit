import React from "react";
import "./style.scss";

interface ButtonProps {
  name: string;
  // createTask: () => void;
  // updateTasks: () => void;
  // handleModalClick: () => void;
  onClick: () => void;
}

const Button = ({
  onClick,
  name,
}: ButtonProps) => {
  return (
    <button
      className="Button"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export { Button };
