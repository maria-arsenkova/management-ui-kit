import React from "react";
import "./style.scss";

export enum BUTTON_SIZE {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export enum BUTTON_VARIABLE {
  DEFAULT = "DEFAULT",
  WARNING = "WARNING",
  SUCCESS = "SUCCESS",
  TRANSPARENT = "TRANSPARENT",
  DANGER = "DANGER",
}

export enum BUTTON_TEXT {
  DEFAULT = "DEFAULT",
  WARNING = "WARNING",
  WHITE = "WHITE",
}

interface ButtonProps {
  onClick: () => void;
  size?: BUTTON_SIZE;
  fillWidth?: boolean;
  variable?: BUTTON_VARIABLE;
  text?: BUTTON_TEXT;
  children:
    | React.ReactChildren
    | React.ReactChildren[]
    | React.ReactChild
    | React.ReactChild[];
}

const Button = ({
  onClick,
  size = BUTTON_SIZE.MEDIUM,
  fillWidth = false,
  variable = BUTTON_VARIABLE.DEFAULT,
  text = BUTTON_TEXT.DEFAULT,
  children,
}: ButtonProps) => {
  const getButtonClass = (
    size: BUTTON_SIZE,
    fillWidth = false,
    variable: BUTTON_VARIABLE,
    text: BUTTON_TEXT
  ): string => {
    let className = "Button ";

    if (size === BUTTON_SIZE.SMALL) {
      className += "Button_small ";
    } else if (size === BUTTON_SIZE.MEDIUM) {
      className += "Button_medium ";
    } else if (size === BUTTON_SIZE.LARGE) {
      className += "Button_large ";
    }

    if (fillWidth) {
      className += "Button_fillWidth ";
    }

    if (variable === BUTTON_VARIABLE.DEFAULT) {
      className += "Button_default ";
    } else if (variable === BUTTON_VARIABLE.WARNING) {
      className += "Button_warning ";
    } else if (variable === BUTTON_VARIABLE.SUCCESS) {
      className += "Button_success ";
    } else if (variable === BUTTON_VARIABLE.TRANSPARENT) {
      className += "Button_transparent ";
    } else if (variable === BUTTON_VARIABLE.DANGER) {
      className += "Button_danger ";
    }

    if (text === BUTTON_TEXT.DEFAULT) {
      className += "Button_text-default ";
    } else if (text === BUTTON_TEXT.WARNING) {
      className += "Button_text-warning ";
    } else if (text === BUTTON_TEXT.WHITE) {
      className += "Button_text-white ";
    } 

    return className;
  };

  return (
    <button
      className={getButtonClass(size, fillWidth, variable, text)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
