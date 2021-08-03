import React from "react";
import "./style.scss";

interface TextareaProps {
  label: string;
  handleDescription: (value: string) => void;
}

const Textarea = ({ label, handleDescription }: TextareaProps) => {
  return (
    <div className="Textarea">
      <div className="Textarea__label">{label}</div>
      <div>
        <textarea
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
