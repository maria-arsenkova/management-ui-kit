import React, { useState } from "react";
import "./style.scss";

export enum TEXTAREA_VARIABLE {
  DEFAULT = "DEFAULT",
  TRANSPARENT = "TRANSPARENT",
}

interface TextareaProps {
  onFocus?: () => void;
  label?: string;
  value?: string;
  variable: TEXTAREA_VARIABLE;
  handleDescription: (value: string) => void;
  test: (test: boolean) => void;
}

const Textarea = ({
  onFocus,
  label,
  value,
  handleDescription,
  test,
  variable = TEXTAREA_VARIABLE.TRANSPARENT,
}: TextareaProps) => {
  // const [textAreaHeight, setTextAreaHeight] = useState({
  //   height: "auto",
  // });

  const handleTextAreaHeight = (event: any) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

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
          rows={8}
          // style={textAreaHeight}
          className={className}
          onChange={(event) => {
            handleDescription(event.target.value);
            handleTextAreaHeight(event);
            test(false);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export { Textarea };
