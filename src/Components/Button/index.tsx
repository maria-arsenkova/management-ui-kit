import React from "react";
import "./style.scss";

export enum BUTTON_SIZE {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

interface ButtonProps {
  name: string;
  onClick: () => void;
  size: BUTTON_SIZE;
}

const Button = ({ onClick, name, size }: ButtonProps) => {
  let className = "Button ";
  if (size == BUTTON_SIZE.SMALL) {
    className += "Button_small";
  } else if (size == BUTTON_SIZE.MEDIUM) {
    className += "Button_medium";
  } else if (size == BUTTON_SIZE.LARGE) {
    className += "Button_large";
  }
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
};

export { Button };
