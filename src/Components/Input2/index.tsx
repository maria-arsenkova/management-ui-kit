import React from "react";
import "./style.scss";

interface InputProps {
  type: string;
  id?: string;
  checked: boolean;

  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Input = ({ type, id, checked, label, value, onChange }: InputProps) => {
  let className = '';

  return (
    <div className="Input">
      <div className="Input__label">{label}</div>
      <div>
        <input
          id={id}
          checked={checked}
          // className="Input__value"
          className={className}
          value={value}
          type={type}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export { Input };
