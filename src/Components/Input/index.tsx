import React from "react";
import "./style.scss";

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <div className="Input">
      <div className="Input__label">{label}</div>
      <div>
        <input
          className="Input__value"
          value={value}
          type="text"
          onChange={(event) => {
            onChange(event.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export { Input };
