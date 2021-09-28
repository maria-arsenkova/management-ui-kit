import React from "react";
import "./style.scss";

export enum TEXTAREA_VARIABLE {
  DEFAULT = "DEFAULT",
  TRANSPARENT = 'TRANSPARENT',
}

interface TextareaProps {
  onFocus?: () => void;
  label?: string;
  value?: string;
  variable: TEXTAREA_VARIABLE;
  handleDescription: (value: string) => void;
}

const Textarea = ({ onFocus, label, value, handleDescription, variable = TEXTAREA_VARIABLE.TRANSPARENT }: TextareaProps) => {
  
  let className = "Textarea__value ";

  if (variable === TEXTAREA_VARIABLE.TRANSPARENT) {
    className += "Textarea_transparent ";
  } else if (variable === TEXTAREA_VARIABLE.DEFAULT) {
    className += "Textarea_default ";
  }

  return (
    <div className="Textarea">
      {label && <div className="Textarea__label">{label}</div>}
      <div>
        <textarea
          onFocus={onFocus}
          value={value}
          className={className}
          onChange={(event) => {
            handleDescription(event.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export { Textarea };
