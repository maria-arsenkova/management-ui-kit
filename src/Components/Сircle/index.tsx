import React from "react";
import "./style.scss";

export enum CIRCLE_SIZE {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export enum CIRCLE_VARIABLE {
  DEFAULT = "DEFAULT",
  WARNING = "WARNING",
}

interface CircleProps {
  size: CIRCLE_SIZE;
  variable: CIRCLE_VARIABLE;
  children:
    | React.ReactChildren
    | React.ReactChildren[]
    | React.ReactChild
    | React.ReactChild[];
}

const Circle = ({ size, variable, children, }: CircleProps): JSX.Element => {
  const getCircleClass = (
    size: CIRCLE_SIZE,
    variable: CIRCLE_VARIABLE
  ): string => {
    let className = "Circle ";

    if (size === CIRCLE_SIZE.SMALL) {
      className += "Circle_small ";
    } else if (size === CIRCLE_SIZE.MEDIUM) {
      className += "Circle_medium ";
    } else if (size === CIRCLE_SIZE.LARGE) {
      className += "Circle_large ";
    }

    if (variable === CIRCLE_VARIABLE.DEFAULT) {
      className += "Circle_default ";
    } else if (variable === CIRCLE_VARIABLE.WARNING) {
      className += "Circle_warning ";
    }

    return className;
  };

  return <span className={getCircleClass(size, variable)}>{children}</span>;
};

export { Circle };
