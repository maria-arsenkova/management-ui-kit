import React from 'react';
import './style.css';

export interface TaskFilesProps {
  id: string;
  preview?: string;
  name: string;
  size: number;
  sizeSign: "KB"|"MB"|"GB"|"ТB";
  onRemoveFile: (id: string) => void;
}

function TaskFiles({ id, preview, name, size, sizeSign, onRemoveFile }: TaskFilesProps) {
  return (
    <div className='task__file' id={id}>
      <img className='task__file-preview' src={preview} alt={name} />
      <div>
        <div className='task__file-name'>{name}</div>
        <div>
          <span className='task__file-size'>{size} {sizeSign}</span>
          <button
            className='task__file-delete'
            onClick={() => {
              onRemoveFile(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export { TaskFiles };
