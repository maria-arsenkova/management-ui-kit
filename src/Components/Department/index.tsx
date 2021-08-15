import React from "react";
import "./style.scss";

export enum DEPARTMENT {
  MARKETING = "MARKETING",
  DESIGN = "DESIGN",
  DEVELOPEMENT = "DEVELOPEMENT",
}

export type DepartmentType = {
  department: DEPARTMENT;
};

const Department = ({ department }: DepartmentType) => {
  let className = "Department ";

  if (department == DEPARTMENT.DESIGN) {
    className += "Department_design";
  } else if (department == DEPARTMENT.DEVELOPEMENT) {
    className += "Department_developement";
  } else if (department == DEPARTMENT.MARKETING) {
    className += "Department_marketing";
  }
  return <span className={className}>{department}</span>;
};

export { Department };
