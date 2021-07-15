import React, { useState } from 'react';
import './style.css';

interface modalProps {
  children:
    | React.ReactChildren
    | React.ReactChildren[]
    | React.ReactChild
    | React.ReactChild[];
}

const Modal = ({ children }: modalProps) => {
  return <div className='modal'>{children}</div>;
};

export { Modal };
