import React from "react";
import "./style.scss";
import { TaskFilesForClient } from "./types";

export interface TaskFilesProps {
  file: TaskFilesForClient;
  onRemoveFile: (id: string) => void;
}

function TaskFiles({ file, onRemoveFile }: TaskFilesProps) {
  const preparedSize = (size: number): string => {
    const bytes = size;
    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)).toString();
  };

  const download = (url: string | undefined): void => {
    if (typeof url == "string") {
      const link = document.createElement("a");
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="TaskFiles" id={file.id}>
      <img className="TaskFiles__preview" src={file.preview} alt={file.name} />
      <div>
        <div className="TaskFiles__name">{file.name}</div>
        <div>
          <span className="TaskFiles__size">
            {preparedSize(file.size)} {file.sizeSign}
          </span>
          <button
            className="TaskFiles__delete TaskFiles__test"
            onClick={() => {
              onRemoveFile(file.id);
            }}
          >
            Delete
          </button>
          <a target="_blank" download href={file.preview} >скачать</a>
        </div>
      </div>
    </div>
  );
}

export { TaskFiles };
