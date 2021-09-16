import React from "react";
import "./style.scss";

interface TextareaProps {
  label?: string;
  value?: string;
  handleDescription: (value: string) => void;
}

const Textarea = ({ label, value, handleDescription }: TextareaProps) => {
  return (
    <div className="Textarea">
      {label && <div className="Textarea__label">{label}</div>}
      <div>
        <textarea
          value={value}
          className="Textarea__value"
          onChange={(event) => {
            handleDescription(event.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export { Textarea };
