import React from "react";
import "./style.scss";
import { TaskFilesForClient } from "./types";

export interface TaskFilesProps {
  file: TaskFilesForClient;
  onRemoveFile: (id: string) => void;
}

function TaskFiles({ file, onRemoveFile }: TaskFilesProps) {
  return (
    <div className="TaskFiles" id={file.id}>
      <img className="TaskFiles__preview" src={file.preview} alt={file.name} />
      <div>
        <div className="TaskFiles__name">{file.name}</div>
        <div>
          <span className="TaskFiles__size">
            {file.size} {file.sizeSign}
          </span>
          <button
            className="TaskFiles__delete"
            onClick={() => {
              onRemoveFile(file.id);
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
