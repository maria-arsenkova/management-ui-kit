import React from "react";

import "./style.scss";
import closeIcon from "./img/close.svg";

export interface ModalProps {
  children:
    | React.ReactChildren
    | React.ReactChildren[]
    | React.ReactChild
    | React.ReactChild[];
  onClose: () => void;
  title: string;
}

const Modal = ({ children, onClose, title }: ModalProps) => {
  return (
    <div className="Modal">
      <div className="Modal__header">
        <span>{title}</span>
        <img
          src={closeIcon}
          alt="close"
          onClick={onClose}
          className="Modal__close"
        />
      </div>
      {children}
    </div>
  );
};

export { Modal };
