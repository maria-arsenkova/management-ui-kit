import React from "react";
import "./style.scss";

export enum DEPARTMENT {
  MARKETING = "MARKETING",
  DESIGN = "DESIGN",
  DEVELOPEMENT = "DEVELOPEMENT",
}

export type DepartmentType = {
  name: string;
  department: DEPARTMENT;
};

const Department = ({ name, department }: DepartmentType) => {
  let className = "Department ";

  if (department == DEPARTMENT.DESIGN) {
    className += "Department_design";
  } else if (department == DEPARTMENT.DEVELOPEMENT) {
    className += "Department_developement";
  } else if (department == DEPARTMENT.MARKETING) {
    className += "Department_marketing";
  }
  return <span className={className}>{name}</span>;
};

export { Department };
